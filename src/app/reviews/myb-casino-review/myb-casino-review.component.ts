import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-myb-casino-review',
  templateUrl: './myb-casino-review.component.html',
  styleUrls: ['./myb-casino-review.component.scss']
})
export class MybCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('MYBCasino Review 2023 - Is MYB a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest MYBCasino review. Sign up to claim your $1,000 welcome bonus from MYBCasino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'MYB Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
