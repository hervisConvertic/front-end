import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoGenero } from './producto-genero';

@Injectable({
  providedIn: 'root'
})
export class ProductoGeneroService {
  private urlProductoGenero: string = 'http://localhost:8080/productoTalla';

  constructor(private http: HttpClient) { }

  buscarGenero(genero: string): Observable<ProductoGenero[]> {
    const url = `${this.urlProductoGenero}/${genero}`;
    return this.http.get<ProductoGenero[]>(url);
  }
}
