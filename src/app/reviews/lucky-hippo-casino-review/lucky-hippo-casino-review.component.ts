import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lucky-hippo-casino-review',
  templateUrl: './lucky-hippo-casino-review.component.html',
  styleUrls: ['./lucky-hippo-casino-review.component.scss']
})
export class LuckyHippoCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Lucky Hippo Casino Review 2022 - Is Lucky Hippo a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Lucky Hippo Casino review. Sign up to claim up to $9,000 welcome bonus from Lucky Hippo Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Lucky Hippo Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
