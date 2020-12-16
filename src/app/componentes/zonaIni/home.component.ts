import { Component, OnInit } from '@angular/core';
import { ExternalCallServiceService } from '../../servicios/external-call-service.service';
import {LocalstorageService} from '../../servicios/localstorage';

@Component({
  selector: 'app-home',
  templateUrl: '../../vistas/zonaIni/home.component.html',
  styleUrls: ['../../vistas/css/home.component.css']
})
export class HomeComponent implements OnInit {

  nombre: string;
  nif: string;
  constructor(private _REST: ExternalCallServiceService, private storage: LocalstorageService) {
   }

  ngOnInit(): void {
    this.nombre = this.storage.RecuperarStorage('usu');
  }

  comprobar(): boolean{
    var logueado = this._REST.logueado();
    console.log(logueado);
    return logueado;
  }
  salir(){
    this._REST.logout();
  }
}
