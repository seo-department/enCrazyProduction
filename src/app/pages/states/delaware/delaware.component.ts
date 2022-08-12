import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-delaware',
  templateUrl: './delaware.component.html',
  styleUrls: ['./delaware.component.scss']
})
export class DelawareComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Gambling in Delaware - Delaware Online Casinos & Gambling Laws');
    this.metaService.addTags([
      {name: 'description', content: 'Do you want to gamble in Delaware? Find out everything about gambling in Delaware, including how the state of Delaware defines gambling with this guide.'},
      { name: 'keywords', content: 'Gambling in Delaware' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
