import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-big-win-casinos',
  templateUrl: './big-win-casinos.component.html',
  styleUrls: ['./big-win-casinos.component.scss']
})
export class BigWinCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    
  this.metaTitle.setTitle('Big Win Casinos – Compare Top Casinos for Big Wins');
  this.metaService.addTags([
    {name: 'description', content: 'Find the top 10 big win casinos here with Crazy Vegas Casino. Sign up to our recommended casinos and receive up to $3000 for your next big win!'},
    { name: 'keywords', content: 'Big Win Casinos' },
    { name: 'robots', content: 'Index,follow' },
    { charset: 'UTF-8' },
  ]);
    }

}
