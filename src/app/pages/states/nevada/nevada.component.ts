import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nevada',
  templateUrl: './nevada.component.html',
  styleUrls: ['./nevada.component.scss']
})
export class NevadaComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Gambling in Nevada - Nevada Online Casinos & Gambling Laws');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for direction about gambling in Nevada? Use this guide to find out everything there is about Nevada gambling from where to gamble to how to gamble.'},
      { name: 'keywords', content: 'Gambling in Nevada' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
