import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Blackjack Glossary – Online Blackjack Dictionary, Slang & Lingo');
    this.metaService.addTags([
      {name: 'description', content: 'Blackjack glossary. Understand the meaning of common online blackjack lingo with these terms & definitions. Learn the blackjack jargon you need to know here.'},
      { name: 'keywords', content: 'Blackjack Glossary' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
