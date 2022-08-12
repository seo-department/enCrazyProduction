import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-best-payout-casinos',
  templateUrl: './best-payout-casinos.component.html',
  styleUrls: ['./best-payout-casinos.component.scss']
})
export class BestPayoutCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Payout Casinos - Casinos with Nearly Instant Payouts USA');
    this.metaService.addTags([
      {name: 'description', content: 'Are you looking for the best payout casinos that actually pay out? Discover a list of the top 10 casinos with the highest pay outs from Crazy Vegas Casino.'},
      { name: 'keywords', content: 'Best Payout Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
