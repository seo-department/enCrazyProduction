import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-free-spin-casino-review',
  templateUrl: './free-spin-casino-review.component.html',
  styleUrls: ['./free-spin-casino-review.component.scss']
})
export class FreeSpinCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Free Spin Casino Review 2022 – Is Free Spin a safe Casino Site?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Free Spin Casino Review. Sign up at Free Spin Casino today to claim your share of the $5000 Welcome Bonus. Read the full casino review here!'},
      { name: 'keywords', content: 'Free Spin Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
