import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ruby-slots-casino-review',
  templateUrl: './ruby-slots-casino-review.component.html',
  styleUrls: ['./ruby-slots-casino-review.component.scss']
})
export class RubySlotsCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Ruby Slots Review 2023 - Is Sun Palace Ruby Slots a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Ruby Slots Casino review. Sign up to claim your 25 Free Spins welcome bonus from Ruby Slots Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Ruby Slots Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
