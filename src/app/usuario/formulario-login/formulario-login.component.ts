import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {
  public usuarios: Usuario = new Usuario();

  expresionContrasena: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$";

  miFormularioLogin: FormGroup = this.formBuilder.group({
    correo: ['', [Validators.required, Validators.email]],
    contrasena: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  campoLoginEsValido(campoLogin: string, validacion: string):
    boolean {
    return this.miFormularioLogin.controls[campoLogin].errors?.[
      validacion] && this.miFormularioLogin.controls[campoLogin].touched;
  }

  public login(): void {
    if (this.miFormularioLogin.invalid) {
      this.miFormularioLogin.markAllAsTouched();
      return;
    }
    this.usuarios.correo = this.miFormularioLogin.value.correo;
    this.usuarios.contrasena = this.miFormularioLogin.value.contrasena;

    this.usuarioService.login(this.usuarios).subscribe(
      (response: any) => {
        console.log(response);
        if (response.status === "success") {
          console.log('Inicio de sesión exitoso');
          this.router.navigate(['/registro']);
        } else {
          console.log('Error al iniciar sesión: ' + response.message);
        }
      },
      //  error
      (error) => {
        console.log('Error al iniciar sesión: ' + error);
      }
    );
    console.log(this.miFormularioLogin.value);
    //this.miFormularioLogin.reset();
  }
}
