import { TipoDocumento } from '../tipoDocumento/tipo-documento';
export class Usuario {
    id!: number;
    documento!: string;
    nombre1!: string;
    nombre2!: string;
    apellido1!: string;
    apellido2!: string;
    correo!: string;
    contrasena!: string;
    tipoDocumento!: TipoDocumento;
}
