import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-eclipse-casino-review',
  templateUrl: './eclipse-casino-review.component.html',
  styleUrls: ['./eclipse-casino-review.component.scss']
})
export class EclipseCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Eclipse Casino Review 2025 - Is Eclipse a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Eclipse Casino review. Sign up to claim up to $2,000 welcome bonus from Eclipse Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Eclipse Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
