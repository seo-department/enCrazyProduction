import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-arkansas',
  templateUrl: './arkansas.component.html',
  styleUrls: ['./arkansas.component.scss']
})
export class ArkansasComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Online USA Casinos - US Online Gambling Sites 2022');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for the best online casinos USA? Crazy Vegas Casino finds honest United States gambling sites accepting US players to play online games for real money.'},
      { name: 'keywords', content: 'Online Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
