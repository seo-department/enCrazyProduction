import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-paysafecard-casinos',
  templateUrl: './paysafecard-casinos.component.html',
  styleUrls: ['./paysafecard-casinos.component.scss']
})
export class PaysafecardCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best PaySafeCard Casinos 2023 - Casinos Accepting PaySafeCards');
    this.metaService.addTags([
      {name: 'description', content: 'Paysafe casinos. PaySafe is a prepaid card available from 500 000+ stores & accepted for deposits at casinos. Find PaySafeCard Casinos here at Crazy Vegas.'},
      { name: 'keywords', content: 'PaySafeCard Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
