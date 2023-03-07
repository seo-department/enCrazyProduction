import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pennsylvania',
  templateUrl: './pennsylvania.component.html',
  styleUrls: ['./pennsylvania.component.scss']
})
export class PennsylvaniaComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Gambling in Pennsylvnia - PA Online Casinos & Gambling Laws');
    this.metaService.addTags([
      {name: 'description', content: 'Do you want to gamble in Pennsylvania? Find out everything about gambling in Pennsylvania, including how the state of Pennsylvania defines gambling with this guide.'},
      { name: 'keywords', content: 'Gambling in Pennsylvnia' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
