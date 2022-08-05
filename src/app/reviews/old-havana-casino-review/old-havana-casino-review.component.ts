import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-old-havana-casino-review',
  templateUrl: './old-havana-casino-review.component.html',
  styleUrls: ['./old-havana-casino-review.component.scss']
})
export class OldHavanaCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Old Havana Casino Review 2022 - Is Old Havana a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Old Havane Casino review. Sign up to claim your 250% welcome bonus from Old Havana Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Old Havane Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
