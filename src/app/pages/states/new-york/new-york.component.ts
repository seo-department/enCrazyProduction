import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-york',
  templateUrl: './new-york.component.html',
  styleUrls: ['./new-york.component.scss']
})
export class NewYorkComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Gambling in New York - NYC Online Casinos & Gambling Laws');
    this.metaService.addTags([
      {name: 'description', content: 'Do you want to gamble in New York? Find out everything about gambling in New York, including how the state of New York defines gambling with this guide.'},
      { name: 'keywords', content: 'Gambling in New York' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
