import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-igt-gaming-casinos',
  templateUrl: './igt-gaming-casinos.component.html',
  styleUrls: ['./igt-gaming-casinos.component.scss']
})
export class IgtGamingCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('IGT Gaming Casinos - Play at Top IGT Casinos in the United States');
    this.metaService.addTags([
      {name: 'description', content: 'IGT Gaming casinos in America. Find the exciting casino games to play at best IGT Gaming Casinos in the USA. Click here for more.'},
      { name: 'keywords', content: 'IGT Gaming casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
