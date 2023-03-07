import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-traits-of-a-good-online-casino',
  templateUrl: './traits-of-a-good-online-casino.component.html',
  styleUrls: ['./traits-of-a-good-online-casino.component.scss']
})
export class TraitsOfAGoodOnlineCasinoComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Good Online Casinos - Top Traits of a Good Online Casino');
    this.metaService.addTags([
      {name: 'description', content: 'Are you looking for traits of a good online casino? Use our guide to help you identify good casinos from bad. Play at only good casinos we recommend.'},
      { name: 'keywords', content: 'Good Online Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
