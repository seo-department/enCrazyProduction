import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-video-poker',
  templateUrl: './online-video-poker.component.html',
  styleUrls: ['./online-video-poker.component.scss']
})
export class OnlineVideoPokerComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Online Video Poker Games - Top 10 Video Poker Casinos');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for the best online video poker casinos? Our video poker guide offers the best tips to test any players video poker skills.'},
      { name: 'keywords', content: 'Video Poker Games' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
