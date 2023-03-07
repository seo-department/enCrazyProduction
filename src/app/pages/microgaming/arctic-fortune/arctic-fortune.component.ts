import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-arctic-fortune',
  templateUrl: './arctic-fortune.component.html',
  styleUrls: ['./arctic-fortune.component.scss']
})
export class ArcticFortuneComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Arctic Fortune Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Arctic Fortune slot review. Arctic Fortune is a 1024 ways slot from Microgaming with ample winning combinations. There are also wilds, free spins & a bonus round.'},
      { name: 'keywords', content: 'Arctic Fortune slot review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
