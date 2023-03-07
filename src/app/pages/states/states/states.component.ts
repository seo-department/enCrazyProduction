import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('The State of Online Gambling in the USA 2023');
    this.metaService.addTags([
      {name: 'description', content: 'Trying to uncover casino laws for your state? Use our state-by-state guide to help you find out everything there is to know about legal gambling in the USA.'},
      { name: 'keywords', content: 'State of Online Gambling' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
