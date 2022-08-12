import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-iowa',
  templateUrl: './iowa.component.html',
  styleUrls: ['./iowa.component.scss']
})
export class IowaComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Gambling in Iowa - Iowa Online Casinos & Gambling Laws');
    this.metaService.addTags([
      {name: 'description', content: 'Do you want to gamble in Iowa? Find out everything about gambling in Iowa, including how the state of Iowa defines gambling with this guide.'},
      { name: 'keywords', content: 'Gambling in Iowa' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
