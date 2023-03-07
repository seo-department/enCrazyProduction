import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-grande-vegas',
  templateUrl: './grande-vegas.component.html',
  styleUrls: ['./grande-vegas.component.scss']
})
export class GrandeVegasComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Grand Rush Casino Review 2023 - Is Grand Rush a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Grand Rush Casino review. Sign up to claim your $1,000 welcome bonus from Grand Rush Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Grand Rush Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
