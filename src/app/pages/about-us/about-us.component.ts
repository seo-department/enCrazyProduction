import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    
  this.metaTitle.setTitle('All About Crazy Vegas Casino - Expert Guidance to Online Gambling');
  this.metaService.addTags([
    {name: 'description', content: 'Everything you ever need to know about the best USA casinos online in one place. We offer all of the info you need to win at top USA online casinos.'},
    { name: 'keywords', content: 'About us' },
    { name: 'robots', content: 'Index,follow' },
    { charset: 'UTF-8' },
  ]);
  }

}
