import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioLoginComponent } from './usuario/formulario-login/formulario-login.component';
import { FormularioRegistroComponent } from './usuario/formulario-registro/formulario-registro.component';
import { UsuarioService } from './usuario/usuario.service';
import { TipoDocumentoService } from './tipoDocumento/tipo-documento.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioLoginComponent,
    FormularioRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsuarioService,
    TipoDocumentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
