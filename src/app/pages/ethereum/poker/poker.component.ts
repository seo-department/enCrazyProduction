import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-download-casinos',
  templateUrl: './download-casinos.component.html',
  styleUrls: ['./download-casinos.component.scss']
})
export class DownloadCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Download Casinos 2023 - Top Download Online Casinos');
    this.metaService.addTags([
      {name: 'description', content: 'Join the best download casinos. Optimise your download casino experience with our guide. Download your favourite slots and table games to play real money.'},
      { name: 'keywords', content: 'Download Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
