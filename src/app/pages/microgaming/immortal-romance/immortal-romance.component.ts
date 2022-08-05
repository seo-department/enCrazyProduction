import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-immortal-romance',
  templateUrl: './immortal-romance.component.html',
  styleUrls: ['./immortal-romance.component.scss']
})
export class ImmortalRomanceComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Immortal Romance Slot Review & Rating - Try it for Free');
    this.metaService.addTags([
      {name: 'description', content: "Immortal Romance is an online slot that is just perfect those love the genre of dark love and tragedy. Play this slot online for some really impressive winning potential. We'll lead you to an online gambling destination you can play at for hours!"},
      { name: 'keywords', content: 'Immortal Romance Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
