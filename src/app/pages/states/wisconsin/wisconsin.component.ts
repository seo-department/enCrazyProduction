import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wisconsin',
  templateUrl: './wisconsin.component.html',
  styleUrls: ['./wisconsin.component.scss']
})
export class WisconsinComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Gambling in Wisconsin – Is it Legal to Gamble in Wisconsin?');
    this.metaService.addTags([
      {name: 'description', content: 'Do you want to gamble in Wisconsin? Find out everything about gambling in Wisconsin, including how the state of Wisconsin defines gambling, with this guide.'},
      { name: 'keywords', content: 'Gambling in Wisconsin' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
