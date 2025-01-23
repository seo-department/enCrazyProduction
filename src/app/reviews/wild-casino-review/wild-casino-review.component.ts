import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wild-casino-review',
  templateUrl: './wild-casino-review.component.html',
  styleUrls: ['./wild-casino-review.component.scss']
})
export class WildCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Wild Casino Review 2025 - Is Wild a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Wild Casino review. Sign up to claim your $5,000 welcome bonus from Wild Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Wild Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
