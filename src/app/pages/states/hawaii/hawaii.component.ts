import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hawaii',
  templateUrl: './hawaii.component.html',
  styleUrls: ['./hawaii.component.scss']
})
export class HawaiiComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Gambling in Hawaii - Hawaii Online Casinos & Gambling Laws');
    this.metaService.addTags([
      {name: 'description', content: 'Do you want to gamble in Hawaii? Find out everything about gambling in Hawaii, including how the state of Hawaii defines gambling with this guide.'},
      { name: 'keywords', content: 'Gambling in Hawaii' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
