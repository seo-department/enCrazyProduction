import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cabin-fever',
  templateUrl: './cabin-fever.component.html',
  styleUrls: ['./cabin-fever.component.scss']
})
export class CabinFeverComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Cabin Fever Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Cabin Fever hosts a family of bears locked in a tiny cabin for winter. The slot features 5-reels, 20 paylines, scatters, wilds, multipliers, and more!'},
      { name: 'keywords', content: 'Cabin Fever Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
