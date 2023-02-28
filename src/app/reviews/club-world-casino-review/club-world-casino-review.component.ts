import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-club-world-casino-review',
  templateUrl: './club-world-casino-review.component.html',
  styleUrls: ['./club-world-casino-review.component.scss']
})
export class ClubWorldCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Club World Casino Review 2023 - Is Club World a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Club World Casino review. Sign up to claim your $3,000 welcome bonus from Club World Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Club World Casino' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
