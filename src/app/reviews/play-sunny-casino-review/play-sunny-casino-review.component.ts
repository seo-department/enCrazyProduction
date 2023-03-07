import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-play-sunny-casino-review',
  templateUrl: './play-sunny-casino-review.component.html',
  styleUrls: ['./play-sunny-casino-review.component.scss']
})
export class PlaySunnyCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Play Sunny Online Casino Review - Honest Sunny Palace Review');
    this.metaService.addTags([
      {name: 'description', content: 'Sunny Casino Review. Get $500 + 150 Extra Spins welcome offer. Find exclusive bonus codes, banking methods and a variety of games at Sunny Palace.'},
      { name: 'keywords', content: 'Sunny Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
