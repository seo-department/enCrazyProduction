import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Contact Us - #1 Online Casino Guide & Assistance');
    this.metaService.addTags([
      {name: 'description', content: 'Find your online casino with Crazy Vegas Casino. We are here to help you find a reputable and reliable casino site. Find out how to get in touch with us here.'},
      { name: 'keywords', content: 'Contact Us' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
