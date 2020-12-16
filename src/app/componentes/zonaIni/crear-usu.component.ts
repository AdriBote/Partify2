import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { ExternalCallServiceService } from 'src/app/servicios/external-call-service.service';

@Component({
  selector: 'app-crear-usu',
  templateUrl: './../../vistas/zonaIni/crear-usu.component.html',
  styleUrls: ['./../../vistas/css/crear-usu.component.css']
})
export class CrearUsuComponent implements OnInit {

  email: string;
  contra: string;
  nombre: string;
  dni: string;
  primApe: string;
  segApe: string;
  fechaS: string;
  fechaD: Date;
  politica: boolean;
  hoy: Date;

  //regEx
  regEmail="^.*@.*";
  regNomb="^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$";
  regDni="^[a-zA-Z0-9]{5,10}$";

  constructor(private _REST: ExternalCallServiceService, private _router: Router) {
    
  }
  

  creaUsuario():void{
    
    this.email = (<HTMLInputElement>document.getElementById("email")).value.toString();
    this.contra = (<HTMLInputElement>document.getElementById("contra")).value.toString();    
    this.nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
    this.dni = (<HTMLInputElement>document.getElementById("dni")).value.toString(); 
    this.primApe = (<HTMLInputElement>document.getElementById("primApe")).value.toString();
    this.segApe = (<HTMLInputElement>document.getElementById("segApe")).value.toString();
    this.politica = (<HTMLInputElement>document.getElementById("politica")).checked;
    this.fechaS = (<HTMLInputElement>document.getElementById("fecha")).value.toString();
    this.fechaD = new Date(this.fechaS);

    this.hoy = new Date();
    let edad = this.hoy.getFullYear() - this.fechaD.getFullYear();
    let m = this.hoy.getMonth() - this.fechaD.getMonth();
    if (m < 0 || (m === 0 && this.hoy.getDate() < this.fechaD.getDate())) {
      edad--;
    }

    if(this.email.length==0){
      console.log('ERRPR EN BLANCO');
      (<HTMLInputElement>document.getElementById("email")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("email")).style.borderWidth = '5px';
      (<HTMLInputElement>document.getElementById("email")).placeholder = 'Este campo es obligatorio';
    }else if(!this.email.match(this.regEmail)){ 
      (<HTMLInputElement>document.getElementById("email")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("email")).style.borderWidth = '5px';
      window.alert('EMAIL INVALIDO');
    }else if(this.contra.length==0){
      (<HTMLInputElement>document.getElementById("contra")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("contra")).style.borderWidth = '5px';
      (<HTMLInputElement>document.getElementById("email")).style.borderColor = 'black';
      (<HTMLInputElement>document.getElementById("email")).style.borderWidth = '1px';
      (<HTMLInputElement>document.getElementById("contra")).placeholder = 'Este campo es obligatorio';
    }else if(this.contra.length<6){
      (<HTMLInputElement>document.getElementById("contra")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("contra")).style.borderWidth = '5px';
      (<HTMLInputElement>document.getElementById("email")).style.borderColor = 'black';
      (<HTMLInputElement>document.getElementById("email")).style.borderWidth = '1px';
      window.alert('CONTRASEÑA INVALIDA, MINIMO 6 DIGITOS');
    }else if(this.nombre.length==0){
      console.log('ERRPR EN BLANCO');
      (<HTMLInputElement>document.getElementById("nombre")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("nombre")).style.borderWidth = '5px';
      (<HTMLInputElement>document.getElementById("nombre")).placeholder = 'Este campo es obligatorio';
    }else if(!this.nombre.match(this.regNomb)){ 
      (<HTMLInputElement>document.getElementById("nombre")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("nombre")).style.borderWidth = '5px';
      window.alert('NOMBRE INVALIDO');
    }
    else if(this.primApe.length==0){
      console.log('ERRPR EN BLANCO');
      (<HTMLInputElement>document.getElementById("primApe")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("primApe")).style.borderWidth = '5px';
      (<HTMLInputElement>document.getElementById("primApe")).placeholder = 'Este campo es obligatorio';
    }else if(!this.primApe.match(this.regNomb)){ 
      (<HTMLInputElement>document.getElementById("primApe")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("primApe")).style.borderWidth = '5px';
      window.alert('PRIMER APELLIDO INVALIDO');
    }
    else if(!this.segApe.match(this.regNomb)){ 
      (<HTMLInputElement>document.getElementById("segApe")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("segApe")).style.borderWidth = '5px';
      window.alert('SEGUNDO APELLIDO INVALIDO');
    }
    else if(this.dni.length==0){
      (<HTMLInputElement>document.getElementById("dni")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("dni")).style.borderWidth = '5px';
      (<HTMLInputElement>document.getElementById("dni")).placeholder = 'Este campo es obligatorio';
    }else if(!this.dni.match(this.regDni)){ 
      (<HTMLInputElement>document.getElementById("dni")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("dni")).style.borderWidth = '5px';
      window.alert('DNI INCORRECTO');
    }
    else if(this.fechaS.length==0){
      (<HTMLInputElement>document.getElementById("fecha")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("fecha")).style.borderWidth = '5px';
      (<HTMLInputElement>document.getElementById("fecha")).placeholder = 'Este campo es obligatorio';
    }
    else if(edad < 18){
      (<HTMLInputElement>document.getElementById("fecha")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("fecha")).style.borderWidth = '5px';
      window.alert('TIENES QUE SER MAYOR DE EDAD');
    }
    else if(this.politica == false){
      (<HTMLInputElement>document.getElementById("politica")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("politica")).style.borderWidth = '5px';
      window.alert('TIENES QUE ACEPTAR LOS TERMINOS Y SERVICIOS');
    }else{
      let fechaEnv = this.fechaD.getDay() + '/'+this.fechaD.getMonth()+'/'+this.fechaD.getFullYear();
    //console.log(fechaEnv);
    console.log('email: '+this.email+'--nombre: '+this.nombre+'--contra: '+ this.contra+'--ape:'+ this.primApe +'--ape2'+ this.segApe+
    '--dni: '+  this.dni+'--feca: '+ fechaEnv);
    this._REST.CrearUsu(this.email, this.nombre, this.contra, this.primApe, this.segApe, this.dni, fechaEnv).subscribe(
      res=>{
        console.log("RESPUESTA: "+res);
        this._router.navigate(['/home/usu']);
      },err=>{
        console.log("ERROR--->"+err);
      }
    )
    }

    

  }
 
  ngOnInit(): void {
  }

}
