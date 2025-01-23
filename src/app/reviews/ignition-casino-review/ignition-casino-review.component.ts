import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ignition-casino-review',
  templateUrl: './ignition-casino-review.component.html',
  styleUrls: ['./ignition-casino-review.component.scss']
})
export class IgnitionCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Ignition Casino Review 2025 - Is Ignition a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Ignition Casino review. Sign up to claim up to $1,000 welcome bonus from Ignition Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Ignition Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
