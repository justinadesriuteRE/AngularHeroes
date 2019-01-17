
import { Component, OnInit } from '@angular/core';
import { Antihero } from '../antihero';
import { ANTIHEROES } from '../mock-antiheroes';

@Component({
  selector: 'app-antiheroes',
  templateUrl: './antiheroes.component.html',
  styleUrls: ['./antiheroes.component.scss']
})

export class AntiheroesComponent implements OnInit {

  antiheroes = ANTIHEROES;
  selectedAntihero: Antihero;

  onSelect(antihero: Antihero): void {
    this.selectedAntihero = antihero;
  }

  constructor() { }

  ngOnInit() {
  }

}
