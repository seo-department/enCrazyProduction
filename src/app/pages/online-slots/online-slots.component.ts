import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-slots',
  templateUrl: './online-slots.component.html',
  styleUrls: ['./online-slots.component.scss']
})
export class OnlineSlotsComponent implements OnInit {

  real_time ="https://imgix.cosmicjs.com/76d47c70-cffb-11eb-bfae-075125d92be0-real-time-gaming.png";
  playtech ="https://imgix.cosmicjs.com/73824430-cffb-11eb-bfae-075125d92be0-playtech.png";
  igt ="https://imgix.cosmicjs.com/5eb39360-cffb-11eb-bfae-075125d92be0-igt.png";
  netent ="https://imgix.cosmicjs.com/5e72c460-cffc-11eb-bfae-075125d92be0-netent.png";
  novomatic ="https://imgix.cosmicjs.com/6c988d50-cffb-11eb-bfae-075125d92be0-novomatic.png";
  merkur_gaming ="https://imgix.cosmicjs.com/6808cc00-cffb-11eb-bfae-075125d92be0-merkur-gaming.png";
  nyx ="https://imgix.cosmicjs.com/701f6a20-cffb-11eb-bfae-075125d92be0-nyx.png";
  betsoft ="https://imgix.cosmicjs.com/57f447e0-cffb-11eb-bfae-075125d92be0-betsoft.png";

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Online Slots Real Money – Best Online Slot Casinos for 2023');
    this.metaService.addTags([
      {name: 'description', content: 'Are you looking for the best online slots casinos? Read about top sites where to play real money slots online, welcome bonuses, jackpots & more right here!'},
      { name: 'keywords', content: 'Online Slots Real Money' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
