import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoDocumentoService } from '../../tipoDocumento/tipo-documento.service';
import { Usuario } from '../usuario';
import { TipoDocumento } from '../../tipoDocumento/tipo-documento';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  public usuarios: Usuario = new Usuario();
  documentos!: TipoDocumento[];

  expresionContrasena: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$";

  miFormularioRegistro: FormGroup = this.formBuilder.group({
    nombre1: ['', [Validators.required]],
    nombre2: ['', [Validators.required]],
    apellido1: ['', [Validators.required]],
    apellido2: ['', [Validators.required]],
    tipoDocumento: [''],
    documento: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    correo: ['', [Validators.required, Validators.email]],
    contrasena: ['', [Validators.required]],
    confirmacionContrasena: ['']

  })

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private tipoDocumentoService: TipoDocumentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tipoDocumentoService.getTiposDocumento().subscribe(
      documentos => this.documentos = documentos
    );
  }

  campoRegistroEsValido(campoRegistro: string, validacion: string):
    boolean {
    return this.miFormularioRegistro.controls[campoRegistro].errors?.[
      validacion] && this.miFormularioRegistro.controls[campoRegistro].touched;
  }

  public registro(): void {
    if (this.miFormularioRegistro.invalid) {
      this.miFormularioRegistro.markAllAsTouched();
      return;
    }
    this.usuarios.nombre1 = this.miFormularioRegistro.value.nombre1;
    this.usuarios.nombre2 = this.miFormularioRegistro.value.nombre2;
    this.usuarios.apellido1 = this.miFormularioRegistro.value.apellido1;
    this.usuarios.apellido2 = this.miFormularioRegistro.value.apellido2;
    this.usuarios.tipoDocumento = this.miFormularioRegistro.value.tipoDocumento;
    this.usuarios.documento = this.miFormularioRegistro.value.documento;
    this.usuarios.correo = this.miFormularioRegistro.value.correo;
    this.usuarios.contrasena = this.miFormularioRegistro.value.contrasena;

    this.usuarioService.registro(this.usuarios).subscribe(
      (response: any) => {
        console.log(response);
        if (response.status === "success") {
          console.log('Usuario registrado correctamente');
          this.router.navigate(['/login'])
        } else {
          console.log('Error al iniciar sesion: ' + response.message);
        }
      },
      //error
      (error) => {
        console.log('error al iniciar sesion ' + error);
      }
    );
    console.log(this.miFormularioRegistro.value);
  }
}
