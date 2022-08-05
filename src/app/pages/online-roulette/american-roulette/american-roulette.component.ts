import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-american-roulette',
  templateUrl: './american-roulette.component.html',
  styleUrls: ['./american-roulette.component.scss']
})
export class AmericanRouletteComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('American Roulette Guide - Top-Rated American Roulette Online');
    this.metaService.addTags([
      {name: 'description', content: 'American roulette is a popular roulette variant. The American roulette wheel contains 38 numbers, include 0 & 00 which gives players a bigger edge.'},
      { name: 'keywords', content: 'American Roulette' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
