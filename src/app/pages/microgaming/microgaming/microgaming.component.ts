import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-microgaming',
  templateUrl: './microgaming.component.html',
  styleUrls: ['./microgaming.component.scss']
})
export class MicrogamingComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Top Microgaming Casinos 2025 - Play Microgaming Slots');
    this.metaService.addTags([
      {name: 'description', content: 'Microgaming is one of the first casino software providers. They host the biggest collection of slots & table games. Find out where to play Microgaming games with this Microgaming directory.'},
      { name: 'keywords', content: 'Microgaming Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
