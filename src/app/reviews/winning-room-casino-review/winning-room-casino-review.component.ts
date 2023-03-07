import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-winning-room-casino-review',
  templateUrl: './winning-room-casino-review.component.html',
  styleUrls: ['./winning-room-casino-review.component.scss']
})
export class WinningRoomCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Winning Casino Review | Unbiased and Fair Winning Room Review');
    this.metaService.addTags([
      {name: 'description', content: 'Winning Room Casino Review. Sign up & get €100 welcome bonus. Find an extensive selection of top-rated gambling games for real money & excellent promotions.'},
      { name: 'keywords', content: 'Winning Room Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
