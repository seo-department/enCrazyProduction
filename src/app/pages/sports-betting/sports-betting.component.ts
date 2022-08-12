import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sports-betting',
  templateUrl: './sports-betting.component.html',
  styleUrls: ['./sports-betting.component.scss']
})
export class SportsBettingComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Sports Betting – Best Sports Betting Apps and Sites');
    this.metaService.addTags([
      {name: 'description', content: 'Compare the top sports betting sites. Find out where to wager on the latest sporting events. Bet on the NFL, NHL or other major events!'},
      { name: 'keywords', content: 'Sports Betting' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
