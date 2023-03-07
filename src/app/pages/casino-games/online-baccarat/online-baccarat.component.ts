import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-baccarat',
  templateUrl: './online-baccarat.component.html',
  styleUrls: ['./online-baccarat.component.scss']
})
export class OnlineBaccaratComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Online Baccarat - Play Real Money with $3000 Baccarat Bonus');
    this.metaService.addTags([
      {name: 'description', content: 'Compare the best online baccarat casinos as you enjoy popular baccarat variations for real money. Click to find our real money baccarat strategy, tips & rules.'},
      { name: 'keywords', content: 'Online Baccarat' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
