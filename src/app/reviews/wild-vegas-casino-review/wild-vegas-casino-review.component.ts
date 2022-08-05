import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wild-vegas-casino-review',
  templateUrl: './wild-vegas-casino-review.component.html',
  styleUrls: ['./wild-vegas-casino-review.component.scss']
})
export class WildVegasCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Wild Vegas Casino Review 2022 - Is Wild Vegas a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Wild Vegas Casino review. Sign up to claim your 350% welcome bonus from Wild Vegas Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Wild Vegas Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
