import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-roulette',
  templateUrl: './online-roulette.component.html',
  styleUrls: ['./online-roulette.component.scss']
})
export class OnlineRouletteComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Play Online Roulette for Real Money - Best Roulette Sites 2023');
    this.metaService.addTags([
      {name: 'description', content: 'Roulette is the most popular game online and the easiest to learn. The game centres around a numbered spinning wheel & ball. Play at the best online roulette sites USA.'},
      { name: 'keywords', content: 'Online Roulette' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
