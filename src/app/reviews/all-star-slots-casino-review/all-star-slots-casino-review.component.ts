import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-all-star-slots-casino-review',
  templateUrl: './all-star-slots-casino-review.component.html',
  styleUrls: ['./all-star-slots-casino-review.component.scss']
})
export class AllStarSlotsCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('All Star Slots Casino Review 2023 - Is All Star Slots a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest All Star Slots Casino review. Sign up to claim your $2,000 welcome bonus from All Star Slots Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'All Star Slots Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },

    ]);
  }

}
