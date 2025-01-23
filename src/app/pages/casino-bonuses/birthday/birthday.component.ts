import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Birthday Bonuses 2025 - USA Casinos that Give Birthday Money');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for the top 10 birthday casino bonuses? We bring players the best casinos with birthday promotions. Celebrate your birthday at your casino site!'},
      { name: 'keywords', content: 'birthday casino bonuses' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
