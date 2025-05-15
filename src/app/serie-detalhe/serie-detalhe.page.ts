import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie-detalhe',
  templateUrl: './serie-detalhe.page.html',
  styleUrls: ['./serie-detalhe.page.scss'],
  standalone: false,
})
export class SerieDetalhePage implements OnInit {

  serie: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit()
  {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if(getNav?.extras.state)
      {
        this.serie = getNav.extras.state['paramSerie'];
      }
    });
  }
}
