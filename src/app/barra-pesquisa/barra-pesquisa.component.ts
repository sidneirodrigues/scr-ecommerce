import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {
  descricao = "";

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
//-------------- METODO PARA PESQUISAR COM BASE NO QUE FOIS ESCRITO NO FORMULÁRIO. --------------
  pesquisar() {
    if(this.descricao){
      this.router.navigate(["produtos"], { queryParams: { descricao: this.descricao }});
      return
    } else {
      this.router.navigate(["produtos"]);
    }
  }

}
