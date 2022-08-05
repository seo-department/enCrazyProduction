import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sunny-casino-review',
  templateUrl: './sunny-casino-review.component.html',
  styleUrls: ['./sunny-casino-review.component.scss']
})
export class SunnyCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Play Sunny Online Casino Review - Honest Sunny Palace Review');
    this.metaService.addTags([
      {name: 'description', content: 'Sunny Casino Review. Get $500 + 150 Extra Spins welcome offer. Find exclusive bonus codes, banking methods and a variety of games at Sunny Palace.'},
      { name: 'keywords', content: 'Play Sunny Online Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
