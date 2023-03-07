import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mobile-casinos',
  templateUrl: './mobile-casinos.component.html',
  styleUrls: ['./mobile-casinos.component.scss']
})
export class MobileCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Mobile Casinos – Claim Top Mobile Casino Bonus Codes');
    this.metaService.addTags([
      {name: 'description', content: 'Best mobile casinos reviewed. No matter what mobile casino you are looking for, claim exclusive bonuses to play at the top 5 mobile casinos for real money.'},
      { name: 'keywords', content: 'Mobile Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
