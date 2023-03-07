import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-craps-glossary',
  templateUrl: './craps-glossary.component.html',
  styleUrls: ['./craps-glossary.component.scss']
})
export class CrapsGlossaryComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Craps Glossary – Online Craps Dictionary, Slang & Lingo');
    this.metaService.addTags([
      {name: 'description', content: 'Craps glossary. Understand the meaning of common online craps lingo with these terms & definitions. Learn the craps jargon you need to know here.'},
      { name: 'keywords', content: 'Craps Glossary' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
