import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-las-vegas-casino-review',
  templateUrl: './las-vegas-casino-review.component.html',
  styleUrls: ['./las-vegas-casino-review.component.scss']
})
export class LasVegasCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Las Vegas USA Casino Review 2023 - Is Las vegas USA a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Las Vegas USA Casino review. Sign up to claim your $3000 welcome bonus from Las Vegas USA Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Las Vegas Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
