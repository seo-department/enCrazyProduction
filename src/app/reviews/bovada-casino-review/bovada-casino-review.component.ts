import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bovada-casino-review',
  templateUrl: './bovada-casino-review.component.html',
  styleUrls: ['./bovada-casino-review.component.scss']
})
export class BovadaCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Bovada Casino Review 2025 - Bovada Casino Bonus Offers');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Bovada Casino review. Sign up to claim your $3,000 welcome bonus from Bovada Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Bovada Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
