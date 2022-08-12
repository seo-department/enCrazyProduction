import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pots-of-luck-casino-review',
  templateUrl: './pots-of-luck-casino-review.component.html',
  styleUrls: ['./pots-of-luck-casino-review.component.scss']
})
export class PotsOfLuckCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Pots of Luck | Unbiased Casino Review of Pots of Luck');
    this.metaService.addTags([
      {name: 'description', content: "Pot of Luck Casino Review. Play with €200 + 100 Spins deposit bonus. This casino site offers players a wide variety of games. T'c and C's apply."},
      { name: 'keywords', content: 'Pot of Luck Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
