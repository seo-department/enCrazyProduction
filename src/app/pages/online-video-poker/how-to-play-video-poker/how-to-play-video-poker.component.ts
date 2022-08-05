import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-play-video-poker',
  templateUrl: './how-to-play-video-poker.component.html',
  styleUrls: ['./how-to-play-video-poker.component.scss']
})
export class HowToPlayVideoPokerComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('How to Play Video Poker - Beginners Guide on How to Win');
    this.metaService.addTags([
      {name: 'description', content: 'Do you want to learn how to play video poker? Use our how to play video poker guide to find out everything there is to now about the game. Improve your odds to start winning.'},
      { name: 'keywords', content: 'How to Play Video Poker' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
