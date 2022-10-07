import { Component, Input, OnInit } from '@angular/core';
import { Estudante } from './estudante.model';

@Component({
  selector: 'snc-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
})
export class EstudanteComponent implements OnInit {

  @Input() estudante!: Estudante;

  constructor() { }

  ngOnInit(): void {
  }

  exibir(){
    console.log(`Estudante : ${this.estudante.nome}`);
  }
}
