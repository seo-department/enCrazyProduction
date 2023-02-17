import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-grande-vegas-casino-review',
  templateUrl: './grande-vegas-casino-review.component.html',
  styleUrls: ['./grande-vegas-casino-review.component.scss']
})
export class SlotyCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Grande Vegas Casino Review 2023 - Is Grande Vegas a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Grande Vegas Casino review. Sign up to claim your $10,000 welcome bonus from Grande Vegas Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Grande Vegas Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
