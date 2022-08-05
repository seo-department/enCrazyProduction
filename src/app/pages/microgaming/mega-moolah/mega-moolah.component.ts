import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mega-moolah',
  templateUrl: './mega-moolah.component.html',
  styleUrls: ['./mega-moolah.component.scss']
})
export class MegaMoolahComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Mega Moolah Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Mega Moolah slot review 2022. Play the most popular progressive slot game online. Enjoy an exciting gameplay with great bonuses & MEGA payouts worth millions!'},
      { name: 'keywords', content: 'Mega Moolah Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
