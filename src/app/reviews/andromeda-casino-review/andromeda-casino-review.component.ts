import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-andromeda-casino-review',
  templateUrl: './andromeda-casino-review.component.html',
  styleUrls: ['./andromeda-casino-review.component.scss']
})
export class AndromedaCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('Andromeda Casino Review 2024 - Is Andromeda a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Andromeda Casino review. Sign up to claim your $5,000 welcome bonus from Andromeda Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Andromeda Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
