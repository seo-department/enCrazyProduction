import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-tiger-gaming-casino-review',
  templateUrl: './tiger-gaming-casino-review.component.html',
  styleUrls: ['./tiger-gaming-casino-review.component.scss']
})
export class TigerGamingCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Tiger Gaming Casino Review 2025 – Is Tiger Gaming Safe?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Tiger Gaming Casino review. Sign up to claim your $1,000 welcome bonus from Tiger Gaming Casino. Read our honest casino review here.'},
      { name: 'keywords', content: 'Tiger Gaming Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
