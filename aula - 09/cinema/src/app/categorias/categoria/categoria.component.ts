import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from './categoria.model';

@Component({
  selector: 'cin-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {

  @Input() categoria!: Categoria;

  constructor() { }

  ngOnInit(): void {
  }

}
