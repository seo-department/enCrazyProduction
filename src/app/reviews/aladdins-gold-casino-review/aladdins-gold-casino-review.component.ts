import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aladdins-gold-casino-review',
  templateUrl: './aladdins-gold-casino-review.component.html',
  styleUrls: ['./aladdins-gold-casino-review.component.scss']
})
export class AladdinsGoldCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {

  this.metaTitle.setTitle("Aladdins Gold Casino Review 2023 - Is Aladdin's Gold a Safe Casino?");
  this.metaService.addTags([
    {name: 'description', content: "Honest Aladdin's Gold Casino review. Sign up to claim your $2,000 welcome bonus from Aladdin's Gold Casino. Read our trusted casino review here."},
    { name: 'keywords', content: 'Aladdin’s Gold Casino review' },
    { name: 'robots', content: 'Index,follow' },
    { charset: 'UTF-8' },

  ]);


  }

}
