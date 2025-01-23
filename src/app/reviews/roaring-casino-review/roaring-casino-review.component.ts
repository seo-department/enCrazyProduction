import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-roaring-casino-review',
  templateUrl: './roaring-casino-review.component.html',
  styleUrls: ['./roaring-casino-review.component.scss']
})
export class RoaringCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Roaring 21 Casino Review 2025 - Is Roaring 21 a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Roaring 21 Casino review. Sign up to claim your $10,000 welcome bonus from Roaring 21 Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Silver Oak Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
