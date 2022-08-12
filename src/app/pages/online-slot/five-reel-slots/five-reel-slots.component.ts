import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-five-reel-slots',
  templateUrl: './five-reel-slots.component.html',
  styleUrls: ['./five-reel-slots.component.scss']
})
export class FiveReelSlotsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('5 Reel Slots – Guide to Play Real Money Slots with 5-Reels');
    this.metaService.addTags([
      {name: 'description', content: 'Five reel slot machines are the most common slot games. There different types of 5-reel slots, slot bonuses, and ways to play 5 reel slot machines.'},
      { name: 'keywords', content: '5 Reel Slots' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
