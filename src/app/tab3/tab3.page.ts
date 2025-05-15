
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { IAtores } from '../model/IAtores';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor(public router: Router, private alertController: AlertController, private toastController: ToastController) {}

  listaAtores: IAtores[] =
  [
      {
        nome: 'Bianca Bin',
        idade: 34,
        bio: 'De família italiana tradicional e religiosa católica, Bianca é natural da cidade de Jundiaí no interior de São Paulo, e mudou-se com três meses de idade para Itu, também no interior de São Paulo, cidade onde foi criada. Começou a fazer teatro aos 12 anos e aos 16 se mudou para São Paulo. No início de 2009 mudou-se novamente, dessa vez para o Rio de Janeiro, onde ingressou na Oficina de Atores da Rede Globo.',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Bianca_Bin_01.jpg/500px-Bianca_Bin_01.jpg',
        pagina: '/biancabin',
        favorito: false
      },
      {
        "nome": "Tony Ramos",
        "idade": 76,
        "bio": "Antônio de Carvalho Barbosa, conhecido como Tony Ramos, é um dos atores mais renomados do Brasil. Iniciou sua carreira na década de 1960 e consolidou-se como galã em novelas como 'O Astro' (1976), 'Pai Herói' (1979) e 'Rainha da Sucata' (1990). Ao longo de sua carreira, recebeu diversos prêmios, incluindo o Prêmio Shell e o Kikito. É conhecido por sua versatilidade e por interpretar personagens de diferentes nacionalidades.",
        "foto": "https://static1.purepeople.com.br/articles/8/38/03/38/@/4369479-tony-ramos-tem-74-anos-atualmente-e-segu-580x0-2.jpg",
        "pagina": "/tonyramos",
        "favorito": false
      },
      {
        "nome": "Felipe Simas",
        "idade": 32,
        "bio": "Felipe Sang Simas é um ator brasileiro nascido no Rio de Janeiro. Filho do capoeirista Beto Simas e Ana Paula Sang, iniciou sua carreira no teatro antes de transitar para a televisão e cinema. Atuou em novelas como 'Flor do Caribe' (2013), 'Malhação Sonhos' (2014) e 'Totalmente Demais' (2015). Em 2016, interpretou o jogador Garrincha no filme 'Pelé: O Nascimento de uma Lenda'. Em 2024, gravou o longa-metragem 'Asa Branca, a Voz da Arena'.",
        "foto": "https://imagem.natelinha.uol.com.br/tudo-sobre/felipe_simas_a7b6ca3f62f1a7cab19ca4fb6574e96e7eb740fc_e03599636195979831bb3f268870e8bed87ed3de.jpeg",
        "pagina": "/felipesimas",
        "favorito": false
      },
      {
        "nome": "Bruno Gissoni",
        "idade": 34,
        "bio": "Bruno Gissoni é um ator brasileiro que iniciou sua carreira na televisão em 2006. Estreou na novela 'Alta Estação' e, em 2010, protagonizou a 18ª temporada de 'Malhação'. Atuou também em novelas como 'Avenida Brasil' (2012), 'Flor do Caribe' (2013) e 'Em Família' (2014). Em 2015, participou do filme 'Até que a Sorte nos Separe 3: A Falência Final'.",
        "foto": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZ85lG40z3rB-06ojJjYvug-zY2ZoA-jtLQfoTLN7pkVtVbhxgDZVcJqH6UvjgMJ2Qc9DcJbMu2oyk2avlhwh_yQ",
        "pagina": "/brunogissoni",
        "favorito": false
      },
      {
        "nome": "Marcello Melo Jr.",
        "idade": 35,
        "bio": "Marcello Melo Jr. é um ator brasileiro que iniciou sua carreira na novela 'Malhação' (2010). Atuou também em 'A Vida da Gente' (2011), 'Lado a Lado' (2012) e 'Em Família' (2014). Em 2014, foi campeão do quadro 'Dança dos Famosos'. Em 2015, integrou o elenco da novela 'Babilônia' e, em 2016, lançou sua linha de óculos escuros.",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyDwxCCJoGF5TIk_8IvnzLkXTJOmCijldiYK7pnv8pGfIPpJlnj6NaoHv6Ndq0AZG7PTBGw8ZpjdsrCbXDydKLw",
        "pagina": "/marcellomelojr",
        "favorito": false
      },
      {
        "nome": "Carmo Dalla Vecchia",
        "idade": 54,
        "bio": "Carmo Dalla Vecchia é um ator e ex-modelo brasileiro. Iniciou sua carreira como modelo em 1988 e, em 1995, estreou como ator na minissérie 'Engraçadinha'. Atuou em novelas como 'Cobras & Lagartos' (2006), 'A Favorita' (2008), 'Cordel Encantado' (2011) e 'Império' (2014). Em 2019, interpretou Jack Elliot na versão brasileira do musical 'Billy Elliot'.",
        "foto": "https://www.estrelando.com.br/uploads/2022/07/04/carmo-dalla-vecchia-nota-1656953894.jpg",
        "pagina": "/carmodallavecchia",
        "favorito": false
      },
      {
        "nome": "Paulo Leal",
        "idade": 40,
        "bio": "Paulo Leal de Melo Neto é um ator, diretor e roteirista brasileiro. Ficou nacionalmente conhecido por sua atuação nas telenovelas juvenis 'Rebelde' e 'Chiquititas', interpretando o professor Tadeu Oliveira e o médico Fernando Brausen, respectivamente. Começou a atuar aos 14 anos e, além da atuação, também exerce a função de cantor.",
        "foto": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRv-LorgduqI8csV8kIRELsrX-vadGvTJW17d4qIVma6iuXtEHlNgtVrBZ22n2LXAgeUx4-ox68MZTJs7hmSKWP8A",
        "pagina": "/pauloleal",
        "favorito": false
      }
  ];

  exibirAtor(atores: IAtores)
  {
    const navigationExtras : NavigationExtras = {state:{paramAtor:atores}};
    this.router.navigate(['ator-detalhe'], navigationExtras)
  };

  async exibirAlertaFavorito(ator: IAtores)
  {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar esse ator?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            ator.favorito = false;
          }
        },
        {
          text: 'Sim, FAVORITAR',
          handler: () => {
            ator.favorito = true;
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
      message: 'Ator adicionado aos favoritos ;)',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
