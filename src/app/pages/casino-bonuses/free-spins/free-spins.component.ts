import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-free-spins',
  templateUrl: './free-spins.component.html',
  styleUrls: ['./free-spins.component.scss']
})
export class FreeSpinsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Free Spins Bonuses 2025 – Best Free Spins Bonus Codes');
    this.metaService.addTags([
      {name: 'description', content: 'Find the best free spins bonus codes. A complete guide to find free spins bonuses, tips, and requirements on how to claim free spins no deposit bonuses!'},
      { name: 'keywords', content: 'Free Spins Bonuses' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
