import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
//import { GoogleMapsModule } from '@angular/google-maps';

/-Componentes-/
import { HomeComponent } from './componentes/zonaIni/home.component';
import { HomeImageComponent } from './componentes/zonaIni/home-image.component';
import { LogUsuComponent } from './componentes/zonaIni/log-usu.component';
import { CrearUsuComponent } from './componentes/zonaIni/crear-usu.component';
import { CrearEmpresaComponent } from './componentes/zonaIni/crear-empresa.component';
import { VisualEmprComponent } from './componentes/zonaIni/visual-empr.component';
import { ListEmpreComponent } from './componentes/zonaIni/list-empre.component';
import { MostrarEmpComponent } from './componentes/zonaIni/mostrar-emp.component';

const routes: Routes = [{
  path: 'home', component: HomeComponent, children: [
    {path: 'image', component: HomeImageComponent},
    {path: 'usu', component: LogUsuComponent},
    {path: 'crear', component: CrearUsuComponent},
    {path: 'crearEmp', component: CrearEmpresaComponent},
    {path: 'lEmp', component: VisualEmprComponent, children: [
      {path: 'lEmpPe', component: ListEmpreComponent}
    ]},
    {path: 'empresa/:nif', component: MostrarEmpComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
   // GoogleMapsModule
    /*AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDw7crzm6SafZNn3uKoVgaKO7C0e4IUYzs'
    })*/],
  exports: [RouterModule]
})
export class AppRoutingModule { }
