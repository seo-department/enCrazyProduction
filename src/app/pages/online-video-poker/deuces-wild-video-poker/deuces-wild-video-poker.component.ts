import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-deuces-wild-video-poker',
  templateUrl: './deuces-wild-video-poker.component.html',
  styleUrls: ['./deuces-wild-video-poker.component.scss']
})
export class DeucesWildVideoPokerComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Play Deuces Wild Video Poker – Free Video Poker Games');
    this.metaService.addTags([
      {name: 'description', content: 'Deuces wild video poker guide. Find the best deuces wild video poker strategy. Know which moves to make and increase your chances of winning real money.'},
      { name: 'keywords', content: 'Deuces Wild Video Poker' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
