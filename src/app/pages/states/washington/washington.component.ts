import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.scss']
})
export class WashingtonComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    
    this.metaTitle.setTitle('Gambling in Washington - WashingtonOnline Casinos & Gambling Laws');
    this.metaService.addTags([
      {name: 'description', content: 'Looking to gamble in the state of Washington? Find out everything you need to know about gambling in Washington state, including gambling laws for Washington.'},
      { name: 'keywords', content: 'Gambling in Washington' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
      }

}
