import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-triple-eight-tiger-casino-review',
  templateUrl: './triple-eight-tiger-casino-review.component.html',
  styleUrls: ['./triple-eight-tiger-casino-review.component.scss']
})
export class TripleEightTigerCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('888Tiger Casino Review 2024 - Is 888Tiger a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest 888Tiger Casino review. Sign up to claim your $2,500 welcome bonus from 888Tiger Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: '888Tiger Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
