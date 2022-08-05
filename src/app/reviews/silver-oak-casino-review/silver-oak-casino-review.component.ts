import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-silver-oak-casino-review',
  templateUrl: './silver-oak-casino-review.component.html',
  styleUrls: ['./silver-oak-casino-review.component.scss']
})
export class SilverOakCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Silver Oak Casino Review 2022 - Is Silver Oak a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Silver Oak Casino review. Sign up to claim your 320% welcome bonus from Silver Oak Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Silver Oak Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}

