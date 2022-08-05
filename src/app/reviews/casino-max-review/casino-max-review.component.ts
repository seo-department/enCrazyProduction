import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-casino-max-review',
  templateUrl: './casino-max-review.component.html',
  styleUrls: ['./casino-max-review.component.scss']
})
export class CasinoMaxReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Casino Max Casino Review 2022 - Is Casino Max a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Casino Max Casino review. Sign up to claim your $9,000 welcome bonus from Casino Max. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Slot Madness Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
