import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bingo-fest-casino-review',
  templateUrl: './bingo-fest-casino-review.component.html',
  styleUrls: ['./bingo-fest-casino-review.component.scss']
})
export class BingoFestCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('BingoFest Casino Review 2025 - Is BingoFest a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest BingoFest Casino review. Sign up to claim your 50 Free Spins + $20 NDB welcome bonus from BingoFest Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'BingoFest Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }
}
