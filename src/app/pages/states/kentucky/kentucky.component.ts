import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kentucky',
  templateUrl: './kentucky.component.html',
  styleUrls: ['./kentucky.component.scss']
})
export class KentuckyComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Gambling in Kentucky - Kentucky Online Casinos & Gambling Laws');
    this.metaService.addTags([
      {name: 'description', content: 'Do you want to gamble in Kentucky? Find out everything about gambling in Kentucky, including how the state of Kentucky defines gambling with this guide.'},
      { name: 'keywords', content: 'Gambling in Kentucky' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
