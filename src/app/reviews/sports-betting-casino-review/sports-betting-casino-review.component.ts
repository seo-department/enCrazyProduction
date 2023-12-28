import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sports-betting-casino-review',
  templateUrl: './sports-betting-casino-review.component.html',
  styleUrls: ['./sports-betting-casino-review.component.scss']
})
export class SportsBettingCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('SportsBetting Casino Review 2024 - crazy vegas Casino');
    this.metaService.addTags([
      {name: 'description', content: 'Honest SportsBetting review. Sign up to claim your $1,500 welcome bonus | SportsBetting Casino Review 2024 - crazy vegas Casino'},
      { name: 'keywords', content: 'Sports Betting review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
