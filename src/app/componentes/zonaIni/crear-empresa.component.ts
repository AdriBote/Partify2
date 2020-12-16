import { Component, OnInit } from '@angular/core';
import { ExternalCallServiceService } from 'src/app/servicios/external-call-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './../../vistas/zonaIni/crear-empresa.component.html',
  styleUrls: ['./../../vistas/css/crear-empresa.component.css']
})
export class CrearEmpresaComponent implements OnInit {

  nombre: string;
  nif: string;
  provincia:string;
  municipio: string;
  direccion: string;
  cp: string;
  email: string;
  politica: boolean;

  //regEx
  regEmail="^.*@.*";
  regNomb="^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$";
  regNif="[A-Z]{1}[0-9]{8}";
  regCp="[0-9]{5}";
  
    constructor(private _REST: ExternalCallServiceService, private _router: Router) {
    
    }
   

  ngOnInit(): void { 
  }
  anadirEmpre():void{
    this.nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
    this.nif = (<HTMLInputElement>document.getElementById("nif")).value.toString();
    this.provincia = (<HTMLInputElement>document.getElementById("provincia")).value.toString();
    this.municipio = (<HTMLInputElement>document.getElementById("municipio")).value.toString();
    this.direccion = (<HTMLInputElement>document.getElementById("direccion")).value.toString();
    this.cp = (<HTMLInputElement>document.getElementById("cp")).value.toString();
    this.email = (<HTMLInputElement>document.getElementById("email")).value.toString();
    this.politica = (<HTMLInputElement>document.getElementById("politica")).checked;

    let cp:number = parseInt(this.cp);
    console.log('cp--->'+cp);
    window.alert('LA EMPRESA NO SE REGISTRARA AL FINALIZAR EL FORMULARIO');
    console.log('probamos');

    if(this.email.length==0){
      console.log('ERRPR EN BLANCO');
      (<HTMLInputElement>document.getElementById("email")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("email")).style.borderWidth = '5px';
      (<HTMLInputElement>document.getElementById("email")).placeholder = 'Este campo es obligatorio';
    }else if(!this.email.match(this.regEmail)){ 
      (<HTMLInputElement>document.getElementById("email")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("email")).style.borderWidth = '5px';
      window.alert('EMAIL INVALIDO');
    }else if(this.provincia.length==0){
      console.log('ERRPR EN BLANCO');
      (<HTMLInputElement>document.getElementById("provincia")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("provincia")).style.borderWidth = '5px';
      (<HTMLInputElement>document.getElementById("provincia")).placeholder = 'Este campo es obligatorio';
    }else if(!this.provincia.match(this.regNomb)){ 
      (<HTMLInputElement>document.getElementById("provincia")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("provincia")).style.borderWidth = '5px';
      window.alert('ERROR EN LA PROVINCIA, EMPIEZAN EN MAYUSCULA');
    }else if(this.nombre.length==0){
      console.log('ERRPR EN BLANCO');
      (<HTMLInputElement>document.getElementById("nombre")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("nombre")).style.borderWidth = '5px';
      (<HTMLInputElement>document.getElementById("nombre")).placeholder = 'Este campo es obligatorio';
    }else if(!this.nombre.match(this.regNomb)){ 
      (<HTMLInputElement>document.getElementById("nombre")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("nombre")).style.borderWidth = '5px';
      window.alert('NOMBRE INVALIDO');
    }else if(this.municipio.length==0){
      console.log('ERRPR EN BLANCO');
      (<HTMLInputElement>document.getElementById("municipio")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("municipio")).style.borderWidth = '5px';
      (<HTMLInputElement>document.getElementById("municipio")).placeholder = 'Este campo es obligatorio';
    }else if(!this.municipio.match(this.regNomb)){ 
      (<HTMLInputElement>document.getElementById("municipio")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("municipio")).style.borderWidth = '5px';
      window.alert('ERROR EN EL MUNICIPIO, EMPIEZAN EN MAYUSCULA');
    }else if(this.cp.length==0){
      console.log('ERRPR EN BLANCO');
      (<HTMLInputElement>document.getElementById("cp")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("cp")).style.borderWidth = '5px';
      (<HTMLInputElement>document.getElementById("cp")).placeholder = 'Este campo es obligatorio';
    }else if(!this.cp.match(this.regCp)){ 
      (<HTMLInputElement>document.getElementById("cp")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("cp")).style.borderWidth = '5px';
      window.alert('LOS CODIGO POSTALES SOLO CONTIENEN 5 NUMEROS');
    }else if(this.direccion.length==0){
      (<HTMLInputElement>document.getElementById("direccion")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("direccion")).style.borderWidth = '5px';
      (<HTMLInputElement>document.getElementById("direccion")).placeholder = 'Este campo es obligatorio';
    }
    else if(this.politica == false){
      (<HTMLInputElement>document.getElementById("politica")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("politica")).style.borderWidth = '5px';
      window.alert('TIENES QUE ACEPTAR LOS TERMINOS Y SERVICIOS');
    }
    else{
      this._REST.CrearEmpre(this.nombre,this.email, this.nif, this.provincia, this.municipio, cp, this.direccion).subscribe(res=>{
        console.log("RESPUESTA: "+res);
        this._router.navigate(['/home/lEmp']);
      },err=>{
        console.log("ERROR--->"+err);
      }
    )
    }
  }

}
