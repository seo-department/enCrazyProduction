import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-c-tips',
  templateUrl: './c-tips.component.html',
  styleUrls: ['./c-tips.component.scss']
})
export class CTipsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Craps Tips - 10 Tips to Incerase Your Craps Odds');
    this.metaService.addTags([
      {name: 'description', content: 'Top 10 Craps tips that increase your chances of winning. Our online craps hacks give you everything you need to know. Get all of the secrets to craps here.'},
      { name: 'keywords', content: 'Craps Tips' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
