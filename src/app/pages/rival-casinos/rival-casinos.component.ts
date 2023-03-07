import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rival-casinos',
  templateUrl: './rival-casinos.component.html',
  styleUrls: ['./rival-casinos.component.scss']
})
export class RivalCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Rival Casinos – Best Rival Casino Bonus Codes & Games');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for the best Rival Casinos in 2020? Crazy Vegas provides a list of Rival slots and table games. Find the best and latest Rival Casino sites here.'},
      { name: 'keywords', content: 'Rival Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
