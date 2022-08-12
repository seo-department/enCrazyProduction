import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-avalon',
  templateUrl: './avalon.component.html',
  styleUrls: ['./avalon.component.scss']
})
export class AvalonComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Avalon Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Avalon slot from Microgaming has a medieval theme with 5 reels, bonus rounds & multiple paylines. Ideal for low to medium volatile players with a RTP of 97%.'},
      { name: 'keywords', content: 'Avalon Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
