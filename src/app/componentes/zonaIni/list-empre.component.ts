import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'empreList',
  templateUrl: './../../vistas/zonaIni/list-empre.component.html',
  styleUrls: ['./../../vistas/css/list-empre.component.css']
})
export class ListEmpreComponent implements OnInit {
  @Input() mostrar:any;
  constructor() { }

  ngOnInit(): void {
  }
}
