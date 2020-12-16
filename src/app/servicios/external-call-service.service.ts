import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Empresa } from '../modelos/empresa';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})

export class ExternalCallServiceService {
  //La url esta porque la base de datos esta en la máquina virtual 
  public enlace: string = 'http://192.168.1.68/';
  constructor(private _http: HttpClient, private router: Router) {
    
  }
  public CrearEmpre(nombre:string, correo:string, nif:string, provincia:string, municipio:string,cp: number, calle:string):Observable<boolean>{
    return this._http.get<boolean>(this.enlace+'ProyectService/ser/empresas/agregar?nombre='+nombre+'&correo='+correo+'&nif='+nif+
        '&provincia='+provincia+'&municipio='+municipio+'&cp='+cp+'&calle='+calle,
        {headers : new HttpHeaders({'Content-Type': 'application/json'})});
  }
  public CrearUsu(correo: string, nombre: string, contra: string, primAp: string, segAp: string, dni: string, fecha: string):Observable<boolean>{
    return this._http.get<boolean>(this.enlace+'ProyectService/ser/usuarios/agregar?correo='+correo+'&nombre='+nombre+'&contra='+contra+
        '&primApe='+primAp+"&segApe="+segAp+"&dni="+dni+"&fecha="+fecha,
    {headers : new HttpHeaders({'Content-Type': 'application/json'})});
  }
  public RecibirEmpr():Observable<Empresa[]>{
    return this._http.get<Empresa[]>(this.enlace+'ProyectService/ser/empresas/listar', 
    {headers : new HttpHeaders({'Content-Type': 'application/json'})});
  }
  public RecibirEmpresa(NIF: string):Observable<Empresa>{
    return this._http.get<Empresa>(this.enlace+'ProyectService/ser/empresas/listaruna?nif='+NIF, 
    {headers : new HttpHeaders({'Content-Type': 'application/json'})});
  }
  public Mapeado(cp: number):Observable<any>{
    console.log('CODIGO POSTAL xterno---->'+cp);
    return this._http.get<any>('https://maps.googleapis.com/maps/api/geocode/json?address='+cp+'&region=es&key=',//aqui entra la clave que te de google
    {headers : new HttpHeaders({'Content-Type': 'application/json'})});
  }
  public Loguear(correo: string, contraseña:string):Observable<any>{
    return this._http.get<any>(this.enlace+'ProyectService/ser/usuarios/loguear?correo='+correo+'&contrasena='+contraseña,
    {headers : new HttpHeaders({'Content-Type': 'application/json'})});
  }
  




  ///***********************SERVICIOS TOKEN */
  getToken() {
    return localStorage.getItem('token');
  }

  logueado(){
    return !!localStorage.getItem('usu');
  }

  logout() {
    //localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['Cliente/Login']);
  }
}
