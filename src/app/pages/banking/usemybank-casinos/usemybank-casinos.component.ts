import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-usemybank-casinos',
  templateUrl: './usemybank-casinos.component.html',
  styleUrls: ['./usemybank-casinos.component.scss']
})
export class UsemybankCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best UseMyBank Casinos 2024 - Casinos Accepting UseMyBank');
    this.metaService.addTags([
      {name: 'description', content: 'UseMyBank Casino Guide. Find casinos accepting the UseMyBank deposit option and how to use it with this Crazy Vegas guide.'},
      { name: 'keywords', content: 'UseMyBank Casino' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
