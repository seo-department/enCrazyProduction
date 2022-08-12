import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ace-lucky-casino-review',
  templateUrl: './ace-lucky-casino-review.component.html',
  styleUrls: ['./ace-lucky-casino-review.component.scss']
})
export class AceLuckyCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Ace Lucky Casino Review - Honest Ace Lucky Casino Review');
    this.metaService.addTags([
      {name: 'description', content: 'Our casino review team takes a look at the Ace Lucky casino. Find out what Ace Lucky has to offer and what makes them a good choice.'},
      { name: 'keywords', content: 'Ace Lucky Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },

    ]);

  }

}
