import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-xbet-casino-review',
  templateUrl: './xbet-casino-review.component.html',
  styleUrls: ['./xbet-casino-review.component.scss']
})
export class XbetCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Honest XBet Casino Review 2025 – Is XBet a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted XBet Casino review. Sign up to claim your $1,000 welcome bonus from MyBookie casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'XBet Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
