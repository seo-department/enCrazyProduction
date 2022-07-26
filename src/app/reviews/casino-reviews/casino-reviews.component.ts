import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-casino-reviews',
  templateUrl: './casino-reviews.component.html',
  styleUrls: ['./casino-reviews.component.scss']
})
export class CasinoReviewsComponent implements OnInit {

  
  real_time ="https://imgix.cosmicjs.com/76d47c70-cffb-11eb-bfae-075125d92be0-real-time-gaming.png";
  playtech ="https://imgix.cosmicjs.com/73824430-cffb-11eb-bfae-075125d92be0-playtech.png";
  igt ="https://imgix.cosmicjs.com/5eb39360-cffb-11eb-bfae-075125d92be0-igt.png";
  netent ="https://imgix.cosmicjs.com/5e72c460-cffc-11eb-bfae-075125d92be0-netent.png";
  novomatic ="https://imgix.cosmicjs.com/6c988d50-cffb-11eb-bfae-075125d92be0-novomatic.png";
  merkur_gaming ="https://imgix.cosmicjs.com/6808cc00-cffb-11eb-bfae-075125d92be0-merkur-gaming.png";
  nyx ="https://imgix.cosmicjs.com/701f6a20-cffb-11eb-bfae-075125d92be0-nyx.png";
  betsoft ="https://imgix.cosmicjs.com/57f447e0-cffb-11eb-bfae-075125d92be0-betsoft.png";

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Online Casino Reviews USA – Honest US Casino Reviews');
    this.metaService.addTags([
      {name: 'description', content: 'Best US Casino reviews. Find honest online casino reviews from trusted casino sites in America. We compare top USA casinos online, bonuses & more!'},
      { name: 'keywords', content: 'Casino reviews' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
