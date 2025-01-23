import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bingo-spirit-casino-review',
  templateUrl: './bingo-spirit-casino-review.component.html',
  styleUrls: ['./bingo-spirit-casino-review.component.scss']
})
export class BingoSpiritCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('BingoSpirit Casino Review 2025 - Is BingoSpirit a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted BingoSpirit Casino review. Sign up to claim your No deposit $10 + 30 free spins welcome bonus from BingoSpirit Casino.'},
      { name: 'keywords', content: 'BingoSpirit Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
