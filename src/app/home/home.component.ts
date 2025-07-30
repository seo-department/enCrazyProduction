import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logo_casino ="https://imgix.cosmicjs.com/79171e30-20f4-11ec-a8e0-f76ec38a4b1a-128x128-real-online-casino.png";
  real_online_casino ="https://imgix.cosmicjs.com/79ac3240-20f4-11ec-a8e0-f76ec38a4b1a-128x128-online-casinos-real-money.png";
  best_usa_online_casinos="https://imgix.cosmicjs.com/42a692c0-017c-11ef-9e48-85dc2e02a5a2-620x240-best-usa-online-casino-sites.png"
  online_casinos_usa ="https://imgix.cosmicjs.com/79789f20-20f4-11ec-a8e0-f76ec38a4b1a-128x128-online-casinos-usa.png";
  online_casino_games ="https://imgix.cosmicjs.com/797829f0-20f4-11ec-a8e0-f76ec38a4b1a-128x128-online-casino-games-1.png";
  us_online_casinos="https://imgix.cosmicjs.com/61e3b880-0239-11ef-9e48-85dc2e02a5a2-150x150-best-usa-online-casino-sites.png"
  online_casino_reviews ="https://imgix.cosmicjs.com/7948b580-20f4-11ec-a8e0-f76ec38a4b1a-128x128-online-casino-reviews.png";
  online_casinos_that_accept_cash_app ="https://imgix.cosmicjs.com/797c48a0-20f4-11ec-a8e0-f76ec38a4b1a-128x128-online-casinos-that-accept-cash-app.png";
  slot_casinos="https://imgix.cosmicjs.com/b354d590-0208-11ef-9e48-85dc2e02a5a2-94x94-slots.png"
  blackjack_casinos="https://imgix.cosmicjs.com/b3541240-0208-11ef-9e48-85dc2e02a5a2-94x94-blackjack.png"
  craps_casinos="https://imgix.cosmicjs.com/aa03bba0-0208-11ef-9e48-85dc2e02a5a2-94x94-craps.png"
  video_poker_casinos="https://imgix.cosmicjs.com/aa0c2010-0208-11ef-9e48-85dc2e02a5a2-94x94-video-poker.png"
  baccarat_casinos="https://imgix.cosmicjs.com/aa0d0a70-0208-11ef-9e48-85dc2e02a5a2-94x94-baccarat.png"
roulette_casinos="https://imgix.cosmicjs.com/aa054240-0208-11ef-9e48-85dc2e02a5a2-94x94-roulette.png"
 author_haydee="https://imgix.cosmicjs.com/c6edc050-021a-11ef-9e48-85dc2e02a5a2-110x108-author-haydee.png"
  visa ="https://imgix.cosmicjs.com/860f6d20-21c3-11ec-a33b-09138673c894-visa-casino-banking.png";
  mastercard ="https://imgix.cosmicjs.com/860ea9d0-21c3-11ec-a33b-09138673c894-mastercard-casino-banking.jpg";
  debit ="https://imgix.cosmicjs.com/86100960-21c3-11ec-a33b-09138673c894-debit-card-casinos.png";
  paysafecard ="https://imgix.cosmicjs.com/85d79440-21c3-11ec-a33b-09138673c894-paysafecard.png";
  neteller ="https://imgix.cosmicjs.com/85d6a9e0-21c3-11ec-a33b-09138673c894-neteller-casino-banking.jpg";
  ecopayz ="https://imgix.cosmicjs.com/86088f50-21c3-11ec-a33b-09138673c894-ecopayz.png";
  usemybank ="https://imgix.cosmicjs.com/86092b90-21c3-11ec-a33b-09138673c894-usemybank.png";
  credit_card ="https://imgix.cosmicjs.com/8609c7d0-21c3-11ec-a33b-09138673c894-credit-card.png";


  real_time ="https://imgix.cosmicjs.com/76d47c70-cffb-11eb-bfae-075125d92be0-real-time-gaming.png";
  playtech ="https://imgix.cosmicjs.com/73824430-cffb-11eb-bfae-075125d92be0-playtech.png";
  igt ="https://imgix.cosmicjs.com/5eb39360-cffb-11eb-bfae-075125d92be0-igt.png";
  netent ="https://imgix.cosmicjs.com/5e72c460-cffc-11eb-bfae-075125d92be0-netent.png";
  novomatic ="https://imgix.cosmicjs.com/6c988d50-cffb-11eb-bfae-075125d92be0-novomatic.png";
  merkur_gaming ="https://imgix.cosmicjs.com/6808cc00-cffb-11eb-bfae-075125d92be0-merkur-gaming.png";
  nyx ="https://imgix.cosmicjs.com/701f6a20-cffb-11eb-bfae-075125d92be0-nyx.png";
  betsoft ="https://imgix.cosmicjs.com/57f447e0-cffb-11eb-bfae-075125d92be0-betsoft.png";

  pay_real_money ="https://imgix.cosmicjs.com/7978ed40-20f4-11ec-a8e0-f76ec38a4b1a-128x128-online-casinos-that-pay-real-money.png";
  real_money_online_casinos ="https://imgix.cosmicjs.com/794978d0-20f4-11ec-a8e0-f76ec38a4b1a-128x128-real-money-online-casinos.png";
  accredited ="https://imgix.cosmicjs.com/3e204c90-21c9-11ec-a33b-09138673c894-128x128-accredited-online-casinos.png";


  constructor( private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best USA Online Casinos - Top Real Money Online Casino Sites 2025');
    this.metaService.addTags([
      {name: 'description', content: 'Play at the best online casinos USA. Crazy Vegas Casino lists all new USA online casinos in one place. Claim bonuses up to $10,000 and play games.'},
      { name: 'keywords', content: 'Online Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },

    ]);
    
  }
}
