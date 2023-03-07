import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-true-fortune-casino-review',
  templateUrl: './true-fortune-casino-review.component.html',
  styleUrls: ['./true-fortune-casino-review.component.scss']
})
export class TrueFortuneCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('True Fortune Casino Review 2023 - Is True Fortune a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest True Fortune Casino review. Sign up to claim your $2,000 welcome bonus from True Fortune Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'True Fortune Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
