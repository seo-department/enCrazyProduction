import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-alley-cats',
  templateUrl: './alley-cats.component.html',
  styleUrls: ['./alley-cats.component.scss']
})
export class AlleyCatsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Alley Cats Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Alley Cats slot. Developed by Microgaming, this slot has 5 reels, 9 paylines, exciting bonus features, and a whole slot game full of your typical alley cats.'},
      { name: 'keywords', content: 'Alley Cats Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
