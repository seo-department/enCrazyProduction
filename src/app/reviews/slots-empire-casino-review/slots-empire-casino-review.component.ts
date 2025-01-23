import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-slots-empire-casino-review',
  templateUrl: './slots-empire-casino-review.component.html',
  styleUrls: ['./slots-empire-casino-review.component.scss']
})
export class SlotsEmpireCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Slots Empire Casino Review 2025 - Is Slots Empire a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Slots Empire Casino review. Sign up to claim your 220% welcome bonus from Slots Empire Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Slots Empire Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
