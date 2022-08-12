import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-club-player-casino-review',
  templateUrl: './club-player-casino-review.component.html',
  styleUrls: ['./club-player-casino-review.component.scss']
})
export class ClubPlayerCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Club Player Casino Review 2022 - Is Club Player a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Club Player Casino review. Sign up to claim your 450% welcome bonus from Club Player Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Club Player Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
