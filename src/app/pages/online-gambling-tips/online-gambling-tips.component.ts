import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-gambling-tips',
  templateUrl: './online-gambling-tips.component.html',
  styleUrls: ['./online-gambling-tips.component.scss']
})
export class OnlineGamblingTipsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Online Gambling Tips - Casino Tips That Actually Work 2022');
    this.metaService.addTags([
      {name: 'description', content: 'Top online gambling tips for beginner and advanced players. These tips will help you understand the game rules, the gambling process, find a site and more!'},
      { name: 'keywords', content: 'Online Gambling Tips' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
