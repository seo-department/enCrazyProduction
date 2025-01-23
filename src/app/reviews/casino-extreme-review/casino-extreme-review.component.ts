import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-casino-extreme-review',
  templateUrl: './casino-extreme-review.component.html',
  styleUrls: ['./casino-extreme-review.component.scss']
})
export class CasinoExtremeReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Casino Extreme Review 2025 - Is Casino Extreme Safe?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Casino Extreme review. Sign up to claim your $3,000 welcome bonus from Casino Extreme. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Extreme Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
