import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-high-roller-casinos',
  templateUrl: './high-roller-casinos.component.html',
  styleUrls: ['./high-roller-casinos.component.scss']
})
export class HighRollerCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best High Roller Casinos 2025 - High Limit Casinos for Big Spenders');
    this.metaService.addTags([
      {name: 'description', content: 'High roller casinos offer exclusive VIP bonus rewards for big spenders. The best high roller casino sites offer high stake games for VIP players.'},
      { name: 'keywords', content: 'High Roller Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
