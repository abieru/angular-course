import { Component, OnInit } from '@angular/core';
import { Contry } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  constructor( private paisservices: PaisService) { }

  termino       : string   = '';
  temErro       : boolean  = false;
  paises        : Contry[] = [];


  buscar ( termino:string){
    this.temErro = false;
    this.termino = termino; //se asigna el valor obtenido
    console.log(this.termino);
    
    this.paisservices.buscarCapital(this.termino)
    .subscribe((paises) => {
      console.log(paises);
      this.paises = paises;
    }, (err) =>{
      this.temErro = true;
      this.paises  = [];
    })
  }
  sugerencias(termino : string){
    this.temErro = false;
    
    //  creando sugerencias en real time
  }
  ngOnInit(): void {
  }

}
