import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor() {}

  listaFilmes: IFilme[] =
  [
      {
        nome: 'Mortal Kombat (2021)',
        lancamento: '15/04/2021',
        duracao: '1h50m',
        classificacao: 9,
        cartaz: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8G1DRfef9H1U5t4m7gRkhOH8F4d.jpg',
        generos: ['Ação', 'Fantasia', 'Aventura'],
        pagina: '/mortal-kombat',
        favorito: false
      },
      {
        nome: 'Vingadores: Ultimato (2019)',
        lancamento: '25/04/2019 (BR)',
        duracao: '3h01m',
        classificacao: 6,
        cartaz: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
        generos: ['Aventura', 'Ficção Científica', 'Ação'],
        pagina: '/avengers',
        favorito: false
      },
  ]

}
