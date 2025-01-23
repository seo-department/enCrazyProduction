import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ecopayz-casinos',
  templateUrl: './ecopayz-casinos.component.html',
  styleUrls: ['./ecopayz-casinos.component.scss']
})
export class EcopayzCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best ecoPayz Casinos 2025 - Casinos Accepting ecoPayz Payments');
    this.metaService.addTags([
      {name: 'description', content: 'EcoPayz casinos guide. Top casinos where EcoPayz is an accepted real money withdrawal and deposit method. The best EcoPayz casino services.'},
      { name: 'keywords', content: 'Best ecoPayz Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
