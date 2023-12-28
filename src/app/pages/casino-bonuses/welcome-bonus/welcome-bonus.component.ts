import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome-bonus',
  templateUrl: './welcome-bonus.component.html',
  styleUrls: ['./welcome-bonus.component.scss']
})
export class WelcomeBonusComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Welcome Bonuses 2024 - Online Casinos with Sign-Up Bonuses');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for the best welcome bonuses? Register at casinos listed on the Crazy Vegas Casino table for exclusive casino welcome bonuses.'},
      { name: 'keywords', content: 'Best Welcome Bonuses' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
