import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-texas',
  templateUrl: './texas.component.html',
  styleUrls: ['./texas.component.scss']
})
export class TexasComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    
    this.metaTitle.setTitle('Gambling in Texas - Texas Online Casinos & Gambling Laws');
    this.metaService.addTags([
      {name: 'description', content: 'Do you want to gamble in Texas? Find out everything about gambling in Texas, including how the state of Texas defines gambling with this guide.'},
      { name: 'keywords', content: 'Gambling in Texas' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
      }

}
