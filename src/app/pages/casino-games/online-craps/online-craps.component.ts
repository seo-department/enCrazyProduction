import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-craps',
  templateUrl: './online-craps.component.html',
  styleUrls: ['./online-craps.component.scss']
})
export class OnlineCrapsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Online Craps - Play Online Craps for Fun or Money');
    this.metaService.addTags([
      {name: 'description', content: 'Online Craps guide. Find the most popular craps variations for mobile & pc. Increase your chances of winning real money with multiple craps betting options.'},
      { name: 'keywords', content: 'Online Craps' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
