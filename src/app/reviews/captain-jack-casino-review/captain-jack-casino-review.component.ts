import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-captain-jack-casino-review',
  templateUrl: './captain-jack-casino-review.component.html',
  styleUrls: ['./captain-jack-casino-review.component.scss']
})
export class CaptainJackCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Captain Jack Casino Review 2022 - Is Captain Jack a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Captain Jack Casino review. Sign up to claim your $3000 welcome bonus from Captain Jack Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Captain Jack Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
