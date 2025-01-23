import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vegas-crest-casino-review',
  templateUrl: './vegas-crest-casino-review.component.html',
  styleUrls: ['./vegas-crest-casino-review.component.scss']
})
export class VegasCrestCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Vegas Crest Casino Review 2025 - Is Vegas Crest a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Vegas Crest Casino review. Sign up to claim your 250% welcome bonus from Vegas Crest Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Vegas Crest Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
