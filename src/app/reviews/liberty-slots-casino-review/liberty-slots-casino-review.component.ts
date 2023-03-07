import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-liberty-slots-casino-review',
  templateUrl: './liberty-slots-casino-review.component.html',
  styleUrls: ['./liberty-slots-casino-review.component.scss']
})
export class LibertySlotsCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Liberty Casino Review 2023 - Is Liberty a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Liberty Casino review. Sign up to claim your $777 welcome bonus from Liberty Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Liberty Slots Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
