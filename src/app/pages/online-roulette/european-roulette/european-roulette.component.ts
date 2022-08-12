import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-european-roulette',
  templateUrl: './european-roulette.component.html',
  styleUrls: ['./european-roulette.component.scss']
})
export class EuropeanRouletteComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('European Rouletten - European Roulette Rules, Odds & Strategy');
    this.metaService.addTags([
      {name: 'description', content: 'European roulette is a variant which originated in France. The European roulette wheel has 36 numbers include 0. This gives players better odds of winning!'},
      { name: 'keywords', content: 'European Rouletten' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
