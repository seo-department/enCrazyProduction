import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-apple-casinos',
  templateUrl: './apple-casinos.component.html',
  styleUrls: ['./apple-casinos.component.scss']
})
export class AppleCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Top Best Apple Casinos - Real Money Casino Apple Apps');
    this.metaService.addTags([
      {name: 'description', content: 'Are you looking for the top Apple Casinos? Compare the best Apple casino bonuses, games, & more. Try iOS compatible casinos for the best wins!'},
      { name: 'keywords', content: 'Apple Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
