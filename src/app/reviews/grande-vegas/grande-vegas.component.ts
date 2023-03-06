import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sloty-casino-review',
  templateUrl: './grande-vegas-casino-review.component.html',
  styleUrls: ['./grande-vegas-casino-review.component.scss']
})
export class SlotyCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Grande Vegas Casino Review 2023 - Is Grande Vegas a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Sloty Casino review. Sign up to claim your $300 welcome bonus from Sloty Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Grande Vegas Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
