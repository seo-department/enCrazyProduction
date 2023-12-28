import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gossip-slots-casino-review',
  templateUrl: './gossip-slots-casino-review.component.html',
  styleUrls: ['./gossip-slots-casino-review.component.scss']
})
export class GossipSlotsCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Gossip Slots Casino Review 2024 - Is Gossip Slots a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Gossip Slots Casino review. Sign up to claim your $8,000 welcome bonus from Gossip Slots Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Gossip Slots Casino' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
