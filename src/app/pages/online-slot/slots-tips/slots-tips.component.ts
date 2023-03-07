import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-slots-tips',
  templateUrl: './slots-tips.component.html',
  styleUrls: ['./slots-tips.component.scss']
})
export class SlotsTipsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Slots Tips - 15 Tips to Incerase Your Slots Odds');
    this.metaService.addTags([
      {name: 'description', content: 'Top 15 slots tips that increase your chances of winning. Our online slot hacks give you everything you need to know. Get all of the secrets to slots here.'},
      { name: 'keywords', content: 'Slots Tips' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
