import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-super-slots-casino-review',
  templateUrl: './super-slots-casino-review.component.html',
  styleUrls: ['./super-slots-casino-review.component.scss']
})
export class SuperSlotsCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Super Slots Casino Review 2023 - Is Super Slots a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Super Slots Casino review. Sign up to claim your $6,000 welcome bonus from Super Slots. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Super Slots Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
