import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-keno',
  templateUrl: './keno.component.html',
  styleUrls: ['./keno.component.scss']
})
export class KenoComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Online Keno – $3000 to Play the Keno Lottery Game');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for the best keno games to play online? Choose your favorite keno game and select up to 20 numbers. Pick correctly to win with live keno online!'},
      { name: 'keywords', content: 'Online Keno' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
