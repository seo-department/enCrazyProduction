import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-prism-casino-review',
  templateUrl: './prism-casino-review.component.html',
  styleUrls: ['./prism-casino-review.component.scss']
})
export class PrismCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    
  this.metaTitle.setTitle('Prism Casino Review 2024 - Is Prism a Safe Casino?');
  this.metaService.addTags([
    {name: 'description', content: 'Honest Prism Casino review. Sign up to claim your 350% welcome bonus from Prism Casino. Read our trusted casino review here.'},
    { name: 'keywords', content: 'Prism Casino review' },
    { name: 'robots', content: 'Index,follow' },
    { charset: 'UTF-8' },
  ]);
  }

}
