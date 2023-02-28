import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dreams-casino-review',
  templateUrl: './dreams-casino-review.component.html',
  styleUrls: ['./dreams-casino-review.component.scss']
})
export class DreamsCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Dreams Casino Review 2023 - Is Dreams Casino a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Dreams Casino review. Sign up to claim your 25 Free Spins welcome bonus from Dreams Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Dreams Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
