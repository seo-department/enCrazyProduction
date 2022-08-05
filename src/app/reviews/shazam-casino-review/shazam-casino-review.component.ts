import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shazam-casino-review',
  templateUrl: './shazam-casino-review.component.html',
  styleUrls: ['./shazam-casino-review.component.scss']
})
export class ShazamCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Shazam Casino Review 2022 - Is Shazam a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Shazam Casino review. Sign up to claim your $6,250 welcome bonus from Shazam Casino. Read our trusted casino review here. '},
      { name: 'keywords', content: 'Shazam Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
