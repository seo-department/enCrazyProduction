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
    this.metaTitle.setTitle('Gambling in Arkansas – Is it Legal to Gamble in Arkansas?');
    this.metaService.addTags([
      {name: 'description', content: 'Want to know more about gambling in the state of Arkansas? Find out everything you need to know about online gambling in Arkansas state, including the gambling laws.'},
      { name: 'keywords', content: 'Gambling in Arkansas' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
