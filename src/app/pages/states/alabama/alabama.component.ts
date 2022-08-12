import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-alabama',
  templateUrl: './alabama.component.html',
  styleUrls: ['./alabama.component.scss']
})
export class AlabamaComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Gambling in Alabama - Alabama Online Casinos & Gambling Laws');
    this.metaService.addTags([
      {name: 'description', content: 'Do you want to gamble in Alabama? Find out everything about gambling in Alabama, including how the state of Alabama defines gambling with this guide.'},
      { name: 'keywords', content: 'Gambling in Alabama' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
