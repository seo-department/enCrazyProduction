import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-jersey',
  templateUrl: './new-jersey.component.html',
  styleUrls: ['./new-jersey.component.scss']
})
export class NewJerseyComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Gambling in New Jersey - NJ Online Casinos & Gambling Laws');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for a guide on gambling in New Jersey? Use this guide to find out everything about New Jersey gambling from where to gamble and how to gamble in NJ.'},
      { name: 'keywords', content: 'Gambling in New Jersey' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);


  }

}
