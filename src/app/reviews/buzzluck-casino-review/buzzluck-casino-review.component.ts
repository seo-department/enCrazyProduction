import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-buzzluck-casino-review',
  templateUrl: './buzzluck-casino-review.component.html',
  styleUrls: ['./buzzluck-casino-review.component.scss']
})
export class BuzzluckCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Online United States Casino - Top USA Online Casinos 2022');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for expert guides to USA online casinos? Buzzluck Casino finds honest to play online casino games and win real money.'},
      { name: 'keywords', content: 'Buzzluck Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
