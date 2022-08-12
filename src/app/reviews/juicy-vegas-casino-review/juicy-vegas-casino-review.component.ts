import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-juicy-vegas-casino-review',
  templateUrl: './juicy-vegas-casino-review.component.html',
  styleUrls: ['./juicy-vegas-casino-review.component.scss']
})
export class JuicyVegasCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Juicy Vegas Casino Review 2022 - Is Juicy Vegas a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Juicy VegasCasino review. Sign up to claim your up to 300% welcome bonus from Juicy Vegas Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Juicy Vegas Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
