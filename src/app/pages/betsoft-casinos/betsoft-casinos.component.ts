import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-betsoft-casinos',
  templateUrl: './betsoft-casinos.component.html',
  styleUrls: ['./betsoft-casinos.component.scss']
})
export class BetsoftCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Betsoft Gaming Casinos - Play Top 10 Betsoft Casino Games');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for the top 10 best Betsoft Gaming Casinos? Find out more about the Bestosft software, where & why you should play at these casinos.'},
      { name: 'keywords', content: 'Betsoft Gaming Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
