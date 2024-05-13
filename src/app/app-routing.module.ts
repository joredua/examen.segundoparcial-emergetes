import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { DatosComponent } from './pages/datos/datos.component';
import { DirectorioComponent } from './pages/directorio/directorio.component';
import { EjecutivoComponent } from './pages/ejecutivo/ejecutivo.component';
import { EstructuraComponent } from './pages/estructura/estructura.component';
import { GeograficaComponent } from './pages/geografica/geografica.component';
const routes: Routes = [
 
  { path : "inicio", component : InicioComponent},
  { path : "datos", component : DatosComponent},
  { path : "directorio", component : DirectorioComponent}, 
  { path : "ejecutivo", component : EjecutivoComponent}, 
  { path : "estructura", component : EstructuraComponent},
  { path : "geografica", component : GeograficaComponent},      

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
