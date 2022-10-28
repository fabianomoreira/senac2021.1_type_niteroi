import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria/categoria.model';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'cin-categorias',
  templateUrl: './categorias.component.html'
})
export class CategoriasComponent implements OnInit {
  categorias!: Categoria[];
  categoria!: Categoria;

  constructor(private categoriaService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias()
                         .subscribe(categorias => this.categorias = categorias);
  }

  incluirCategoria(){
    console.log('Incluir...');

    this.categoria = {titulo: 'Terror', imagePath: '../../assets/images/dracula.png'};

    this.categoriaService.incluirCategoria(this.categoria)
                         .subscribe(categoria => this.categoria);
  }

}
