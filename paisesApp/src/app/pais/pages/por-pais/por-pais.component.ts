import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Contry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  constructor(private paisservice: PaisService ){}
  
  termino       : string   = '';
  temErro       : boolean  = false;
  paises        : Contry[] = [];
 


  buscar ( termino:string){
    this.temErro = false;
    this.termino = termino; //se asigna el valor obtenido
    console.log(this.termino);
    
    this.paisservice.buscarPais(this.termino)
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

}
