import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-casino-cruise-casino-review',
  templateUrl: './casino-cruise-casino-review.component.html',
  styleUrls: ['./casino-cruise-casino-review.component.scss']
})
export class CasinoCruiseCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Casino Cruise Review 2023 - Is Casino Cruise a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Find out more information about Casino Cruise Casino. See what casino games, bonuses and promotions they have to offer and what others have to say.'},
      { name: 'keywords', content: 'Wild Card City Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
