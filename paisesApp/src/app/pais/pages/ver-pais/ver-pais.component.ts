import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Contry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {


  pais: Contry;
  termino       : string   = '';
  temErro       : boolean  = false;
  constructor(
    private activateroute: ActivatedRoute,
    private paisservice: PaisService
  ) { }

  ngOnInit(): void {
    this.activateroute.params
    .subscribe( ({ id }) =>{
      this.paisservice.getPaisPorAlpha(id)
      .subscribe((pais) =>{
        this.pais = pais
      }, (err) =>{
        this.temErro = true;
        
      })
    })
  }

}
