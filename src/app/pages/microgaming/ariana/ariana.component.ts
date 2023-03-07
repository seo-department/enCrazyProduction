import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ariana',
  templateUrl: './ariana.component.html',
  styleUrls: ['./ariana.component.scss']
})
export class ArianaComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Ariana Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Ariana Microgaming Slot. This 5 reel slot game has an underwater theme. Ariana is the wild symbol that creates its own wins. Try your luck at top casinos today!'},
      { name: 'keywords', content: 'Ariana Microgaming Slot' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
