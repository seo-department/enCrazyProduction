import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-jackspay-casino-review',
  templateUrl: './jackspay-casino-review.component.html',
  styleUrls: ['./jackspay-casino-review.component.scss']
})
export class JackspayCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('JacksPay Casino Review 2022 - Is JacksPay a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest JacksPay Casino review. Sign up to claim your $600 welcome bonus from JacksPay Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'JacksPay Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
