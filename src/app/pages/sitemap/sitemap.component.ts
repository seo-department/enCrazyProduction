import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Sitemap - Navigate Through Crazy Vegas Casino Guides');
    this.metaService.addTags([
      {name: 'description', content: 'Find your way around the Crazy Vegas website. Use our sitemap to easily locate the latest guides, reviews and bonus codes.'},
      { name: 'keywords', content: 'Sitemap' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
