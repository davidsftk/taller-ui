import { Component, OnInit } from '@angular/core';
import { ElementoService } from './elemento.service';

//Se itera sobre los elementos del response para pintar la información en la ui
@Component({
  selector: 'app-root',
  template: `
    <h1>Elementos</h1>
    <ul>
      <li *ngFor="let elemento of elementos">
        {{ elemento.nombre }}: {{ elemento.descripcion }}
      </li>
    </ul>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  elementos: any[] = [];

  constructor(private elementoService: ElementoService) {}

  ngOnInit() {
    this.elementoService.getElementos().subscribe(data => {
      this.elementos = data;
    }, error => {
      console.error('Error al obtener los elementos', error);
    });
  }
}