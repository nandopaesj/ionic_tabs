import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IFilme } from '../model/IFilme';
import { BuiltinType } from '@angular/compiler';
import { IonAlert, IonButton } from '@ionic/angular/standalone';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(public router: Router, private alertController: AlertController, private toastController: ToastController) {}

  listaFilmes: IFilme[] =
  [
      {
        nome: 'Mortal Kombat (2021)',
        lancamento: '15/04/2021',
        duracao: '1h50m',
        classificacao: 4,
        cartaz: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8G1DRfef9H1U5t4m7gRkhOH8F4d.jpg',
        generos: ['Ação', 'Fantasia', 'Aventura'],
        pagina: '/mortal-kombat',
        favorito: false
      },
      {
        nome: 'Vingadores: Ultimato (2019)',
        lancamento: '25/04/2019 (BR)',
        duracao: '3h01m',
        classificacao: 8.5,
        cartaz: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
        generos: ['Aventura', 'Ficção Científica', 'Ação'],
        pagina: '/avengers',
        favorito: false
      },
      {
        "nome": "Deadpool & Wolverine",
        "lancamento": "26/07/2024",
        "duracao": "2h20m",
        "classificacao": 8.0,
        "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/xq4v7JE8niZ75OYYPDGNn6Gzpyt.jpg",
        "generos": ["Ação", "Comédia", "Ficção Científica"],
        "pagina": "/deadpool-wolverine",
        "favorito": false
      },
      {
        "nome": "Duna: Parte 2",
        "lancamento": "03/10/2024",
        "duracao": "2h45m",
        "classificacao": 8.5,
        "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg",
        "generos": ["Ficção Científica", "Aventura", "Drama"],
        "pagina": "/dune-part-2",
        "favorito": false
      },
      {
        "nome": "Emilia Pérez",
        "lancamento": "15/11/2024",
        "duracao": "2h10m",
        "classificacao": 7.8,
        "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/A5LA1r1GZB3cS2RpD1hc39Cad1R.jpg",
        "generos": ["Drama", "Romance", "Comédia"],
        "pagina": "/emilia-perez",
        "favorito": false
      },
      {
        "nome": "O Conde de Monte Cristo",
        "lancamento": "20/12/2024",
        "duracao": "2h30m",
        "classificacao": 8.2,
        "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/zpg7yCvUVhFZUzSnI8qETAUhCt3.jpg",
        "generos": ["Aventura", "Drama", "Mistério"],
        "pagina": "/conde-de-monte-cristo",
        "favorito": false
      },
      {
        "nome": "Ne Zha 2",
        "lancamento": "22/01/2025",
        "duracao": "1h45m",
        "classificacao": 7.5,
        "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/5lUmWTGkEcYnXujixXn31o9q2T0.jpg",
        "generos": ["Animação", "Ação", "Fantasia"],
        "pagina": "/ne-zha-2",
        "favorito": false
      },
      {
        "nome": "The Fall Guy",
        "lancamento": "10/05/2024",
        "duracao": "2h00m",
        "classificacao": 7.7,
        "cartaz": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7XNciIbkAKDGhfcNwdk1qGpqmL1Uf7HY-yvMeCvNQmikp4HXsm93nAR_6cLjUhxtkuA&usqp=CAU",
        "generos": ["Ação", "Comédia", "Aventura"],
        "pagina": "/fall-guy",
        "favorito": false
      },
      {
        "nome": "Cualquiera Menos Tú",
        "lancamento": "05/09/2024",
        "duracao": "1h50m",
        "classificacao": 6.9,
        "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/iKOEAPkb5EyCPmAgByYNeAoG5uc.jpg",
        "generos": ["Comédia", "Romance"],
        "pagina": "/cualquiera-menos-tu",
        "favorito": false
      },
      {
        "nome": "Civil War",
        "lancamento": "12/06/2024",
        "duracao": "2h20m",
        "classificacao": 7.6,
        "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/3Use5sOQWXL3BvcaKqUH7eQ7I53.jpg",
        "generos": ["Drama", "Ação", "Histórico"],
        "pagina": "/civil-war",
        "favorito": false
      },
      {
        "nome": "Menudas Piezas",
        "lancamento": "25/08/2024",
        "duracao": "1h40m",
        "classificacao": 7.0,
        "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/epxMmvLaQmInLeRNOIMfRaJrhSZ.jpg",
        "generos": ["Comédia", "Drama"],
        "pagina": "/menudas-piezas",
        "favorito": false
      },
      {
        "nome": "El Correo",
        "lancamento": "30/09/2024",
        "duracao": "2h10m",
        "classificacao": 7.4,
        "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/e3u7f56BUOBjRuctXK4xqXi7n0a.jpg",
        "generos": ["Thriller", "Mistério"],
        "pagina": "/el-correo",
        "favorito": false
      },
      {
        "nome": "Perfect Days",
        "lancamento": "18/07/2024",
        "duracao": "2h00m",
        "classificacao": 7.8,
        "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/p4oCDJgtYPg8lWqmeNIsqPwzZ7X.jpg",
        "generos": ["Drama", "Comédia"],
        "pagina": "/perfect-days",
        "favorito": false
      },
    ]

  exibirFilme(filme: IFilme)
  {
    const navigationExtras : NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras)
  };

  async exibirAlertaFavorito(filme: IFilme)
  {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar esse filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            filme.favorito = false;
          }
        },
        {
          text: 'Sim, FAVORITAR',
          handler: () => {
            filme.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast()
  {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos ;)',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
