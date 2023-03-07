import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-multi-wheel-roulette',
  templateUrl: './multi-wheel-roulette.component.html',
  styleUrls: ['./multi-wheel-roulette.component.scss']
})
export class MultiWheelRouletteComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Multi-Wheel Roulette – Find the Best Multi-Wheel Roulette Strategy');
    this.metaService.addTags([
      {name: 'description', content: 'Multi-wheel roulette. Spin multiple roulette wheels simultaneously in multi-wheel roulette & increase your chances of winning. Play at top casinos today!'},
      { name: 'keywords', content: 'Multi-Wheel Roulette' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
