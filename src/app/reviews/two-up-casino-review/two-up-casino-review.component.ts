import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-two-up-casino-review',
  templateUrl: './two-up-casino-review.component.html',
  styleUrls: ['./two-up-casino-review.component.scss']
})
export class TwoUpCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Two-Up Casino Review 2024 – Is Two-Up Casino a Safe Casino Site?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Two-Up Casino Review. Sign up today at Two-Up Casino today and claim your share of the $7500 welcome bonus. Read our full, trusted review here!'},
      { name: 'keywords', content: 'Two-Up Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
