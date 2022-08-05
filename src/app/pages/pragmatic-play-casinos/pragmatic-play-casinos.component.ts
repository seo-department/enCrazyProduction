import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pragmatic-play-casinos',
  templateUrl: './pragmatic-play-casinos.component.html',
  styleUrls: ['./pragmatic-play-casinos.component.scss']
})
export class PragmaticPlayCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Pragmatic Play Casino – Software Guide, Slots & Table Games');
    this.metaService.addTags([
      {name: 'description', content: 'Find the top 10 Pragmatic Play Casinos, and get more information on Pragmatic Play software, plus where and why you should play at these casinos.'},
      { name: 'keywords', content: 'Pragmatic Play Casino' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
