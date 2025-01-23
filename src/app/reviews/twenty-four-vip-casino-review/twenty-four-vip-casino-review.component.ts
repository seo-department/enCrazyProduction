import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twenty-four-vip-casino-review',
  templateUrl: './twenty-four-vip-casino-review.component.html',
  styleUrls: ['./twenty-four-vip-casino-review.component.scss']
})
export class TwentyFourVipCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('24VIP Casino Review 2025 - Is 24VIP a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest 24VIP Casino review. Sign up to claim your 225% welcome bonus from 24VIP Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: '24VIP Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
