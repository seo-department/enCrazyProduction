import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-el-royale-casino-review',
  templateUrl: './el-royale-casino-review.component.html',
  styleUrls: ['./el-royale-casino-review.component.scss']
})
export class ElRoyaleCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('El Royale Casino Review 2022 - Is El Royale a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted El Royale Casino review. Sign up to claim your $12,500 welcome bonus from El Royale Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'El Royale Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
