import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Online Casino FAQs - Find Top Casino FAQs in America');
    this.metaService.addTags([
      {name: 'description', content: 'Find the most frequently asked questions in the USA. Find answers to the top online casino FAQs and improve your casino gambling experience!'},
      { name: 'keywords', content: 'Online Casino FAQs' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
