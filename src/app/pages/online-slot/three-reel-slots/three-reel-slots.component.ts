import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-three-reel-slots',
  templateUrl: './three-reel-slots.component.html',
  styleUrls: ['./three-reel-slots.component.scss']
})
export class ThreeReelSlotsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('3 Reel Slots 2024 – Play Classic Slot Machines Online');
    this.metaService.addTags([
      {name: 'description', content: '3 reel slots require you to have 3 matching symbols adjacent on the reels to win. 3 Reel real money slots have an RTP between 93% - 98%.'},
      { name: 'keywords', content: '3 Reel Slots' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
