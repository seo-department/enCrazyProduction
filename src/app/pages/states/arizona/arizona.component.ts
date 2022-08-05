import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-arizona',
  templateUrl: './arizona.component.html',
  styleUrls: ['./arizona.component.scss']
})
export class ArizonaComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Gambling in Arizona - Arizona Online Casinos & Gambling Laws');
    this.metaService.addTags([
      {name: 'description', content: 'Do you want to gamble in Arizona? Find out everything about gambling in Arizona, including how the state of Arizona defines gambling, with this guide.'},
      { name: 'keywords', content: 'Gambling in Arizona' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
