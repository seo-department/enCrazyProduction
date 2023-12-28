import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manhattan-slots-casino-review',
  templateUrl: './manhattan-slots-casino-review.component.html',
  styleUrls: ['./manhattan-slots-casino-review.component.scss']
})
export class ManhattanSlotsCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Manhattan Slots Casino Review 2024 - Is Manhattan Slots a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Manhattan Slots Casino review. Sign up to claim your $747 welcome bonus from Manhattan Slots Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Manhattan Slots Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
