import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-casino-bonuses',
  templateUrl: './casino-bonuses.component.html',
  styleUrls: ['./casino-bonuses.component.scss']
})
export class CasinoBonusesComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Casino Bonuses – Claim the Latest Casino Bonus Codes 2024');
    this.metaService.addTags([
      {name: 'description', content: 'Want to claim the best casino bonuses? Compare the latest casino bonus codes right here at Crazy Vegas Casino. Learn more about no deposit bonuses & more!'},
      { name: 'keywords', content: 'Casino Bonuses' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
