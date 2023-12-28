import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mybookie-casino-review',
  templateUrl: './mybookie-casino-review.component.html',
  styleUrls: ['./mybookie-casino-review.component.scss']
})
export class MybookieCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best MyBookie Casino Review 2024 – Is MyBookie a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted MyBookie Casino review. Sign up to claim your $1,000 welcome bonus from MyBookie casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'MyBookie Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
