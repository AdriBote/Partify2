/-Modulos-/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
//import { GoogleMapsModule } from '@angular/google-maps';

/-Componentes-/
import { AppComponent } from './componentes/app.component';
import { HomeComponent } from './componentes/zonaIni/home.component';
import { HomeImageComponent } from './componentes/zonaIni/home-image.component';
import { LogUsuComponent } from './componentes/zonaIni/log-usu.component';
import { CrearUsuComponent } from './componentes/zonaIni/crear-usu.component';
import { CrearEmpresaComponent } from './componentes/zonaIni/crear-empresa.component';
import { VisualEmprComponent } from './componentes/zonaIni/visual-empr.component';
import { ListEmpreComponent } from './componentes/zonaIni/list-empre.component';
import { MostrarEmpComponent } from './componentes/zonaIni/mostrar-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeImageComponent,
    LogUsuComponent,
    CrearUsuComponent,
    CrearEmpresaComponent,
    VisualEmprComponent,
    ListEmpreComponent,
    MostrarEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
    //GoogleMapsModule
    /*AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDw7crzm6SafZNn3uKoVgaKO7C0e4IUYzs'
    })*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
