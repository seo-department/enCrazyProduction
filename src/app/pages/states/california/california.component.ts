import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-california',
  templateUrl: './california.component.html',
  styleUrls: ['./california.component.scss']
})
export class CaliforniaComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Gambling in California – Is it Legal to Gamble in California?');
    this.metaService.addTags([
      {name: 'description', content: 'Do you want to know more about gambling in California? Find out everything there is to know about online gambling in California state, including the laws.'},
      { name: 'keywords', content: 'Gambling in California' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
