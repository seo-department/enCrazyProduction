import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-c-play',
  templateUrl: './c-play.component.html',
  styleUrls: ['./c-play.component.scss']
})
export class CPlayComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('How to Play Craps - Craps Beginners Guide to Winning');
    this.metaService.addTags([
      {name: 'description', content: 'How to play craps -a game of chance. Craps may seem like a complicated game at first, but I this guide we explain the game in simple terms,so you can start winning.'},
      { name: 'keywords', content: 'How to play craps' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
