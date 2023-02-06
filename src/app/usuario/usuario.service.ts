import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlEndPoint: string = 'http://localhost:8080/usuario';
  private urlEndPointLogin: string = 'http://localhost:8080/usuario/login-request';
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' })

  constructor(private http: HttpClient) { }

  registro(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlEndPoint, usuario, { headers: this.httpHeaders })
  }

  login(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlEndPointLogin, usuario, { headers: this.httpHeaders })
  }
}
