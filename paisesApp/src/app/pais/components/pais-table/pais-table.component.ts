import { Component, Input } from '@angular/core';
import { Contry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styles: [
  ]
})
export class PaisTableComponent {

  constructor() { }
  @Input() paises: Contry[] = [];


}
