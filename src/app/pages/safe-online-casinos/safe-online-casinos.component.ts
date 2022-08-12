import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-safe-online-casinos',
  templateUrl: './safe-online-casinos.component.html',
  styleUrls: ['./safe-online-casinos.component.scss']
})
export class SafeOnlineCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Safe Online Casinos USA - Secure Casino Sites for Real Money Gambling');
    this.metaService.addTags([
      {name: 'description', content: 'Find safe online casinos in the USA. Crazy Vegas Casinos directs players to the safest casinos online where American players can play real money!'},
      { name: 'keywords', content: 'Safe Online Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
