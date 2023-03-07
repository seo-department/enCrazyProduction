import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wild-scarabs',
  templateUrl: './wild-scarabs.component.html',
  styleUrls: ['./wild-scarabs.component.scss']
})
export class WildScarabsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Wild Scarabs Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Detailed review of wild scarabs slot from Microgaming. Wild Scrabs features 5-reels, 243 ways, and an RTP of 96%. Win up to 1733x your stake in Wild Scarabs!'},
      { name: 'keywords', content: 'Wild Scarabs Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
