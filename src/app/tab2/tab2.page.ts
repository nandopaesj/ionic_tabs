import { ISeries } from './../model/ISeries';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(public router: Router, private alertController: AlertController, private toastController: ToastController) {}

  listaSeries: ISeries[] =
  [
    {
      "nome": "The Last of Us (2023)",
      "lancamento": "15/01/2023",
      "episodios": ["Temporada 1 - 9 episódios", "Temporada 2 - 7 episódios"],
      "classificacao": 8.7,
      "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/el1KQzwdIm17I3A6cYPfsVIWhfX.jpg",
      "generos": ["Pós-Apocalíptico", "Drama", "Thriller"],
      "pagina": "/the-last-of-us",
      "favorito": false
    },
    {
      "nome": "Stranger Things (2016)",
      "lancamento": "15/07/2016",
      "episodios": ["Temporada 1 - 8 episódios", "Temporada 2 - 9 episódios", "Temporada 3 - 8 episódios", "Temporada 4 - 9 episódios", "Temporada 5 - 8 episódios (em produção)"],
      "classificacao": 8.7,
      "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/pi8WsJtGKxuJHdp0m1W2wq7IvxW.jpg",
      "generos": ["Ficção Científica", "Terror", "Mistério"],
      "pagina": "/stranger-things",
      "favorito": false
    },
    {
      "nome": "The Witcher (2019)",
      "lancamento": "20/12/2019",
      "episodios": ["Temporada 1 - 8 episódios", "Temporada 2 - 8 episódios", "Temporada 3 - 8 episódios (em produção)"],
      "classificacao": 8.1,
      "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/uJ1kQWTY1nElMcrrbHtDitbV85K.jpg",
      "generos": ["Fantasia", "Aventura", "Drama"],
      "pagina": "/the-witcher",
      "favorito": false
    },
    {
      "nome": "The Mandalorian (2019)",
      "lancamento": "12/11/2019",
      "episodios": ["Temporada 1 - 8 episódios", "Temporada 2 - 8 episódios", "Temporada 3 - 8 episódios", "Temporada 4 - 8 episódios (em produção)"],
      "classificacao": 8.8,
      "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
      "generos": ["Ação", "Aventura", "Ficção Científica"],
      "pagina": "/the-mandalorian",
      "favorito": false
    },
    {
      "nome": "Breaking Bad (2008)",
      "lancamento": "20/01/2008",
      "episodios": ["Temporada 1 - 7 episódios", "Temporada 2 - 13 episódios", "Temporada 3 - 13 episódios", "Temporada 4 - 13 episódios", "Temporada 5 - 16 episódios"],
      "classificacao": 9.5,
      "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg",
      "generos": ["Crime", "Drama", "Suspense"],
      "pagina": "/breaking-bad",
      "favorito": false
    },
    {
      "nome": "The Office (US) (2005)",
      "lancamento": "24/03/2005",
      "episodios": ["Temporada 1 - 6 episódios", "Temporada 2 - 22 episódios", "Temporada 3 - 25 episódios", "Temporada 4 - 19 episódios", "Temporada 5 - 28 episódios", "Temporada 6 - 26 episódios", "Temporada 7 - 26 episódios", "Temporada 8 - 24 episódios", "Temporada 9 - 25 episódios"],
      "classificacao": 8.9,
      "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/vXffaUYOwkc6G2jb0RlCSdiqENb.jpg",
      "generos": ["Comédia", "Drama"],
      "pagina": "/the-office-us",
      "favorito": false
    },
    {
      "nome": "Friends (1994)",
      "lancamento": "22/09/1994",
      "episodios": ["Temporada 1 - 24 episódios", "Temporada 2 - 24 episódios", "Temporada 3 - 25 episódios", "Temporada 4 - 24 episódios", "Temporada 5 - 24 episódios", "Temporada 6 - 25 episódios", "Temporada 7 - 24 episódios", "Temporada 8 - 24 episódios", "Temporada 9 - 18 episódios"],
      "classificacao": 8.8,
      "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",
      "generos": ["Comédia", "Romance"],
      "pagina": "/friends",
      "favorito": false
    },
    {
    "nome": "On My Block (2018)",
    "lancamento": "16/03/2018",
    "episodios": [
      "Temporada 1 - 10 episódios",
      "Temporada 2 - 10 episódios",
      "Temporada 3 - 10 episódios",
      "Temporada 4 - 10 episódios"
    ],
    "classificacao": 8.0,
    "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/w6oviv65UEducvjAdH3sYYaxdu2.jpg",
    "generos": ["Comédia", "Drama", "Adolescente"],
    "pagina": "/on-my-block",
    "favorito": false
    },
    {
      "nome": "Southland (2009)",
      "lancamento": "09/04/2009",
      "episodios": [
        "Temporada 1 - 6 episódios",
        "Temporada 2 - 13 episódios",
        "Temporada 3 - 10 episódios",
        "Temporada 4 - 10 episódios",
        "Temporada 5 - 10 episódios"
      ],
      "classificacao": 8.4,
      "cartaz": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/flj41WynQKea6DVHgRbbPSWOB1t.jpg",
      "generos": ["Crime", "Drama", "Policial"],
      "pagina": "/southland",
      "favorito": false
    },
  ]

  exibirSerie(series: ISeries)
  {
    const navigationExtras : NavigationExtras = {state:{paramSerie:series}};
    this.router.navigate(['serie-detalhe'], navigationExtras)
  };

  async exibirAlertaFavorito(serie: ISeries)
  {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar essa série?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            serie.favorito = false;
          }
        },
        {
          text: 'Sim, FAVORITAR',
          handler: () => {
            serie.favorito = true;
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
      message: 'Série adicionada aos favoritos ;)',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
