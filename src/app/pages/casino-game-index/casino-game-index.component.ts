import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-casino-game-index',
  templateUrl: './casino-game-index.component.html',
  styleUrls: ['./casino-game-index.component.scss']
})
export class CasinoGameIndexComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Microgaming Slot Reviews & Rating - Play Real Money Instantly');
    this.metaService.addTags([
      {name: 'description', content: 'Find the best Microgaming slot reviews at Crazy Vegas Casino USA. Our slot reviews will help you understand the best Microgaming innovations and what they have to offer in terms of bonus features and real money payouts.'},
      { name: 'keywords', content: 'Microgaming slot reviews' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
