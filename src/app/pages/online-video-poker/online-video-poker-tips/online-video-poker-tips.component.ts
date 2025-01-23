import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-video-poker-tips',
  templateUrl: './online-video-poker-tips.component.html',
  styleUrls: ['./online-video-poker-tips.component.scss']
})
export class OnlineVideoPokerTipsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Online Video Poker Tips - Top USA Online Casinos 2025');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for expert guides to USA online casinos? online video poker tips finds honest to play online casino games and win real money.'},
      { name: 'keywords', content: 'Online Video Poker Tips' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
