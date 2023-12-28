import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lincoln-casino-review',
  templateUrl: './lincoln-casino-review.component.html',
  styleUrls: ['./lincoln-casino-review.component.scss']
})
export class LincolnCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Lincoln Casino Review 2024 - Is Lincoln a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Lincoln Casino review. Sign up to claim your $5,000 welcome bonus from Lincoln Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Lincoln Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
