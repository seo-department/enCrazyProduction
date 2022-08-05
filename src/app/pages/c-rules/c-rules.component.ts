import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-c-rules',
  templateUrl: './c-rules.component.html',
  styleUrls: ['./c-rules.component.scss']
})
export class CRulesComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Craps Rules - Basic and Avanced Craps Game Rules');
    this.metaService.addTags([
      {name: 'description', content: 'Craps Rules for beginners and advanced players. We simplify the craps dice game rules for everyone to understand & play the game proplerly.'},
      { name: 'keywords', content: 'Craps Rules' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
