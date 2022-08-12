import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-beach-babes',
  templateUrl: './beach-babes.component.html',
  styleUrls: ['./beach-babes.component.scss']
})
export class BeachBabesComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Beach Babes - Best Beach Babes to Improve Your Odds');
    this.metaService.addTags([
      {name: 'description', content: 'Beach Babes is a fun beach party themed slot game from Microgaming. The slot has 5 reels, 25 fixed paylines, medium level variance & a 95,22% RTP.'},
      { name: 'keywords', content: 'Beach Babes' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
