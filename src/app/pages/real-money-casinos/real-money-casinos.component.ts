import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-real-money-casinos',
  templateUrl: './real-money-casinos.component.html',
  styleUrls: ['./real-money-casinos.component.scss']
})
export class RealMoneyCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Real Money Casinos – Play at Real Money Casino Apps');
    this.metaService.addTags([
      {name: 'description', content: 'Top real money casinos. Increase your chances of winning instant cash. Sign up to play at a real money casino we recommend & claim the best bonus rewards.'},
      { name: 'keywords', content: 'Real Money Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
