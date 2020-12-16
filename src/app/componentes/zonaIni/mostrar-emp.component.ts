import { Component, OnInit, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ExternalCallServiceService } from 'src/app/servicios/external-call-service.service';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-mostrar-emp',
  templateUrl: './../../vistas/zonaIni/mostrar-emp.component.html',
  styleUrls: ['./../../vistas/css/mostrar-emp.component.css']
})
export class MostrarEmpComponent implements OnInit {

  //sanitazion: any;
  empresa: any;
  valores: any;
  lng: number;
  lat: number;
  api = "api key de google";
  url: string;
  cp: number;
  nif: string;

  constructor(private _rest: ExternalCallServiceService, private dom:DomSanitizer,private rutaActiva: ActivatedRoute) { 
    this.nif = rutaActiva.snapshot.params.nif;
  }

  getEmpresa():void{
    this._rest.RecibirEmpresa(this.nif).subscribe(dato=>{
      this.empresa = dato;
      this.cp = dato.cp;
      console.log('EMPRESA---->');
      console.log(this.empresa);
      console.log('CP---> '+this.cp);
      this.getaltitud();
    });

  }

  getaltitud():void{
    console.log('COdIOSD----->'+this.cp);
    this._rest.Mapeado(this.cp).subscribe(datos=>{
      console.log('codigo postal 2 '+this.cp);
      this.valores = datos;
      this.lng = datos.results[0].geometry.viewport.northeast.lng;
      this.lat = datos.results[0].geometry.viewport.northeast.lat;
      this.url = "https://maps.googleapis.com/maps/api/staticmap?center="+this.lat+","+this.lng+"&zoom=15&size=398x300&key="+this.api;

      console.log('Latitud: '+this.lat);
      console.log('Longitud: '+this.lng);
      console.log(this.valores.results[0]);
    })
  }

  ngOnInit(): void {
    this.getEmpresa();
    
    this.URL();
    //console.log('URL '+this.sanitazion);
  }
  
  

  URL(){
    return this.dom.bypassSecurityTrustResourceUrl(this.url);
  }

}