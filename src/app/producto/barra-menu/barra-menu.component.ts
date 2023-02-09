import { Component, OnInit } from '@angular/core';
import { ProductoGeneroService } from '../producto-genero.service';
import { ProductoGenero } from '../producto-genero';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent implements OnInit {

  seleccionGenero = 'hombre';
  opciones = [
    { genero: 'Ropa de Hombre', value: 'hombre' },
    { genero: 'Ropa de Mujer', value: 'mujer' }
  ];

  hayError: boolean = false;
  productos: ProductoGenero[] = [];

  constructor(private productoGeneroService: ProductoGeneroService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getGenero();
  }

  public getGenero(): void {
    console.log(this.seleccionGenero);
    this.productoGeneroService.buscarGenero(this.seleccionGenero)
      .subscribe(productos => {
        console.log(productos);
        this.productos = productos;
      }, (error) => {
        this.hayError = true;
        this.productos = [];
      });
  }
}
