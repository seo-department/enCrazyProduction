import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-yabby-casino-review',
  templateUrl: './yabby-casino-review.component.html',
  styleUrls: ['./yabby-casino-review.component.scss']
})
export class YabbyCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Yabby Casino Review 2024 - Is Yabby a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Yabby Casino review. Sign up to claim your $5,000 welcome bonus from Yabby Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Yabby Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
