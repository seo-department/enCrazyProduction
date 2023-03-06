import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-spinfinity-casino-review',
  templateUrl: './spinfinity-casino-review.component.html',
  styleUrls: ['./spinfinity-casino-review.component.scss']
})
export class SpinfinityCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Spinfinity Casino Review 2023 - Is Spinfinity a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Spinfinity Casino review. Sign up to claim your $12,500 welcome bonus from Spinfinity Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Spinfinity Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
