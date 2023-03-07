import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-table-games',
  templateUrl: './table-games.component.html',
  styleUrls: ['./table-games.component.scss']
})
export class TableGamesComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Table Games - List of Table Games with the Best Odds');
    this.metaService.addTags([
      {name: 'description', content: 'Best table games guide. Play popular table games online such as blackjack, roulette and video poker. Find table game casino sites for desktop & mobile.'},
      { name: 'keywords', content: 'Best Table Games' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
