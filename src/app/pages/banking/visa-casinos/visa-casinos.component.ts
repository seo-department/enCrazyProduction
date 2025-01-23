import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-visa-casinos',
  templateUrl: './visa-casinos.component.html',
  styleUrls: ['./visa-casinos.component.scss']
})
export class VisaCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Visa Casinos 2025 - Casinos Accepting Visa Transactions');
    this.metaService.addTags([
      {name: 'description', content: 'VISA casinos. VISA cards are one of the most trusted casino banking methods for online payments. Find a list of casinosaccpeting VISA cards here.'},
      { name: 'keywords', content: 'Visa Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
