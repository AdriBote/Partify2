import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from 'src/app/modelos/empresa';
import  {ExternalCallServiceService } from 'src/app/servicios/external-call-service.service';

@Component({
  selector: 'app-visual-empr',
  templateUrl: './../../vistas/zonaIni/visual-empr.component.html',
  styleUrls: ['./../../vistas/css/visual-empr.component.css']
})
export class VisualEmprComponent implements OnInit {

  empre: Empresa[];

  constructor(private _rest: ExternalCallServiceService) { }

  getEmpresas():void{
    this._rest.RecibirEmpr().subscribe(empresas=>{this.empre = empresas; console.log(this.empre)})
  }

  ngOnInit(): void {
    this.getEmpresas();
  }

}
