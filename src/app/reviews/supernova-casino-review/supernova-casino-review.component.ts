import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-supernova-casino-review',
  templateUrl: './supernova-casino-review.component.html',
  styleUrls: ['./supernova-casino-review.component.scss']
})
export class SupernovaCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Supernova Casino Review 2025 - Is Supernova a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Supernova Casino review. Sign up to claim your 300% welcome bonus from Supernova Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Supernova Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
