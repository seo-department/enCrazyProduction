import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bitcoin-casinos',
  templateUrl: './bitcoin-casinos.component.html',
  styleUrls: ['./bitcoin-casinos.component.scss']
})
export class BitcoinCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    
  this.metaTitle.setTitle('Best Bitcoin Casinos in US - Top Casino Sites Accepting Bitcoin');
  this.metaService.addTags([
    {name: 'description', content: 'Bitcoin casinos. Find top casinos accepting Bitcoin. Use the Bitcoin cryptocurrency to play bitcoin gambling games online such as slots, blackjack & more.'},
    { name: 'keywords', content: 'Bitcoin casinos' },
    { name: 'robots', content: 'Index,follow' },
    { charset: 'UTF-8' },
  ]);
    }

}
