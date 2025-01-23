import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-neteller-casinos',
  templateUrl: './neteller-casinos.component.html',
  styleUrls: ['./neteller-casinos.component.scss']
})
export class NetellerCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Neteller Casinos 2025 - Casinos Accepting Neteller');
    this.metaService.addTags([
      {name: 'description', content: 'Neteller deposit & withdraw banking method is one of the most popular options among online players. Find reviews and ratings of the top Neteller casinos.'},
      { name: 'keywords', content: 'Neteller Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
