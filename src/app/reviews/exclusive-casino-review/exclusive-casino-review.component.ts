import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-exclusive-casino-review',
  templateUrl: './exclusive-casino-review.component.html',
  styleUrls: ['./exclusive-casino-review.component.scss']
})
export class ExclusiveCasinoReviewComponent implements OnInit {

  constructor( private metaService: Meta, private metaTitle: Title ) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Trusted Exclusive Casino Review 2025 – Is Exclusive Casino Safe?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Exclusive Casino Review. Sign up at Exclusive Casino today to claim your $2500 welcome bonus. Read the full review of the casino here!'},
      { name: 'keywords', content: 'Exclusive Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
