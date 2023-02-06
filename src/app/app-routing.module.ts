import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './usuario/formulario-login/formulario-login.component';
import { FormularioRegistroComponent } from './usuario/formulario-registro/formulario-registro.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: FormularioLoginComponent },
  { path: 'registro', component: FormularioRegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
