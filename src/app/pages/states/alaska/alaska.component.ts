import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-alaska',
  templateUrl: './alaska.component.html',
  styleUrls: ['./alaska.component.scss']
})
export class AlaskaComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Gambling in Alaska - Alaska Online Casinos & Gambling Laws');
    this.metaService.addTags([
      {name: 'description', content: 'Compare gambling in Alaska to other states. Find out everything you need to know about playing gambling games in the state of Alaska.'},
      { name: 'keywords', content: 'Gambling in Alaska' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
