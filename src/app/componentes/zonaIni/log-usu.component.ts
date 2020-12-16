import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { ExternalCallServiceService } from '../../servicios/external-call-service.service'

@Component({
  selector: 'app-log-usu',
  templateUrl: './../../vistas/zonaIni/log-usu.component.html',
  styleUrls: ['./../../vistas/css/log-usu.component.css']
})
export class LogUsuComponent implements OnInit {

  respuesta: string;
  email: string;
  contraseña: string;
  regEmail="^.*@.*";
  constructor(private _REST: ExternalCallServiceService, private _router: Router) {
    
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  logUsuario():void{
    this.email = (<HTMLInputElement>document.getElementById("email")).value.toString();
    this.contraseña = (<HTMLInputElement>document.getElementById("contra")).value.toString();
    if(this.email.length==0){
      console.log('ERRPR EN BLANCO');
      (<HTMLInputElement>document.getElementById("email")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("email")).style.borderWidth = '5px';
      (<HTMLInputElement>document.getElementById("email")).placeholder = 'Este campo es obligatorio';
    }else if(!this.email.match(this.regEmail)){
      console.log('EMAIL INVALIDO');      
      (<HTMLInputElement>document.getElementById("email")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("email")).style.borderWidth = '5px';
      window.alert('EMAIL INVALIDO');
    }else if(this.contraseña.length==0){
      (<HTMLInputElement>document.getElementById("contra")).style.borderColor = 'red';
      (<HTMLInputElement>document.getElementById("contra")).style.borderWidth = '5px';
      (<HTMLInputElement>document.getElementById("email")).style.borderColor = 'black';
      (<HTMLInputElement>document.getElementById("email")).style.borderWidth = '1px';
      (<HTMLInputElement>document.getElementById("contra")).placeholder = 'Este campo es obligatorio';
    }else{
      this._REST.Loguear(this.email, this.contraseña).subscribe(
        res=>{
          this.respuesta = res.nombre ;
          console.log(this.respuesta);
          localStorage.setItem('usu',JSON.stringify(res.nombre+' '+res.primApe));
          this._router.navigate(['/home/lEmp']);

          /*if(this.respuesta = "NO ENCONTRADO"){
            console.log('VALOR NULO');
            window.alert('CORREO O CONTRASEÑA INVALIDO');
          }*/
        },err=>{
          window.alert('CORREO O CONTRASEÑA INVALIDO');
          console.log(err);
        }
      )
    }

    //if((<HTMLInputElement>document.getElementById("contra")).value)
    /*this._REST.Loguear(this.formlog.controls['email'].value, this.formlog.controls['contra'].value).subscribe(
      res=>{
        if(res.equals("null")){
          this._router.navigate(['home/fail/log']);
        }
      } 
    )*/
  }

}
