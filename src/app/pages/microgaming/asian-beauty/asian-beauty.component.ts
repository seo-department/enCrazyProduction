import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-asian-beauty',
  templateUrl: './asian-beauty.component.html',
  styleUrls: ['./asian-beauty.component.scss']
})
export class AsianBeautyComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Asian Beauty Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Asian Beauty slot. This Microgmaing slot has an Asian theme, with 5 reels and 243 ways to win. There are great bonuses including 25 free spins & more!'},
      { name: 'keywords', content: 'Asian Beauty Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
