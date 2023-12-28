import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-golden-lion-casino-review',
  templateUrl: './golden-lion-casino-review.component.html',
  styleUrls: ['./golden-lion-casino-review.component.scss']
})
export class GoldenLionCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Golden Lion Casino Review 2043 - Is Golden Lionn a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Golden Lion Casino review. Sign up to claim your $3,500 welcome bonus from Golden Lion Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Golden Lion Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
