import { HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import * as $ from 'jquery';
import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { data } from 'jquery';
import { map, filter, scan } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { CanonicalService } from './core/canonical.service';


let gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router){
    this.router.events.subscribe((event: Event) => {

    });   

    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    navEndEvents.subscribe((event: NavigationEnd)=> {
      gtag('config', 'UA-145065808-1', {
        'page_path': event.urlAfterRedirects
      });
    });
    
  }
  ngOnInit() { 
    if (location.pathname =='/slots/3-reel-slots'){
      window.location.href = "/online-slots/3-reel-slots";
    }

    if (location.pathname =='/online-slots/index.asp'){
      window.location.href = "/online-slots";
    }

    if (location.pathname =='/banking/moneybookers-skrill.aspx'){
      window.location.href = "/banking";
    }

    if (location.pathname =='/casino-cruise-review'){
      window.location.href = "/casino-cruise-casino-review";
    }
    if (location.pathname =='/100eurofreeroll.asp?btag=w5456c314p001b5611d'){
      window.location.href = "/";
    }
    if (location.pathname =='/&btag=w28910c314p001'){
      window.location.href = "/";
    }
    if (location.pathname =='/how-to-play-baccarat'){
      window.location.href = "/online-baccarat";
    }
    if (location.pathname =='/craps'){
      window.location.href = "/online-craps";
    }
    if (location.pathname =='/Alaxe'){
      window.location.href = "/";
    }
    if (location.pathname =='/en'){
      window.location.href = "/";
    }
    if (location.pathname =='/online-roulette/tips/'){
      window.location.href = "/online-roulette/roulette-tips";
    }
    if (location.pathname =='/100eurofreeroll.asp?btag=w5456c314p001b5611d'){
      window.location.href = "/";
    }
    if (location.pathname =='/&btag=w28910c314p001'){
      window.location.href = "/";
    }
    if (location.pathname =='/how-to-play-baccarat'){
      window.location.href = "/online-baccarat";
    }
    if (location.pathname =='/craps'){
      window.location.href = "/online-craps";
    }
    if (location.pathname =='/casino-bonuses/birthday/play/slotslv-casino'){
      window.location.href = "/casino-bonuses/birthday";
    }
    if (location.pathname =='/de'){
      window.location.href = "/";
    }
    if (location.pathname =='/roaring-21-casino-review/play/slotslv-casino'){
      window.location.href = "/roaring-21-casino-review";
    }
    if (location.pathname =='/online-baccarat/tips/'){
      window.location.href = "/online-baccarat/baccarat-tips";
    }
    if (location.pathname =='/About-Us'){
      window.location.href = "/about-us";
    }
    if (location.pathname =='/spinfinity-casino-review/play/slotslv-casino'){
      window.location.href = "/spinfinity-casino-review";
    }
    if (location.pathname =='/affiliates/dra440-gameofthrones.aspx?btag=w30666c314p001b11575d&btag2=2'){
      window.location.href = "/";
    }
    if (location.pathname =='/casino-bonuses/%23'){
      window.location.href = "/casino-bonuses";
    }
    if (location.pathname =='new-online-casinos/%23'){
      window.location.href = "/new-online-casinos";
    }
    if (location.pathname =='/banking/debit-card-casinos/play/slotslv-casino'){
      window.location.href = "/banking/debit-card-casinos";
    }
    if (location.pathname =='/slotsplus-casino-review'){
      window.location.href = "/slots-plus-casino-review";
    }
    if (location.pathname =='/high-country-casino-review/play/slotslv-casino'){
      window.location.href = "/high-country-casino-review";
    }
    if (location.pathname =='/new-online-casinos/play/slotslv-casino'){
      window.location.href = "/new-online-casinos";
    }
    if (location.pathname =='/high-country-casino-review/%23'){
      window.location.href = "/high-country-casino-review";
    }
    if (location.pathname =='/https:/www.samhsa.gov'){
      window.location.href = "/";
    }
    if (location.pathname =='/http:/www.problemgambling.ca/gambling-help'){
      window.location.href = "/";
    }
    if (location.pathname =='/casino-bonuses/no-deposit-bonus/play/slotslv-casino'){
      window.location.href = "/casino-bonuses/no-deposit-bonus";
    }
    if (location.pathname =='/states/new-york/%23'){
      window.location.href = "/states/new-york";
    }
    if (location.pathname =='/states/new-york/play/slotslv-casino'){
      window.location.href = "/states/new-york";
    }
    if (location.pathname =='/grand-rush-casino-review/play/slotslv-casino'){
      window.location.href = "/grand-rush-casino-review";
    }
    if (location.pathname =='/buzzluck-casino-review/play/slotslv-casino'){
      window.location.href = "/buzzluck-casino-review";
    }
    if (location.pathname =='/buzzluck-casino-review/%23'){
      window.location.href = "/buzzluck-casino-review";
    }
    if (location.pathname =='/https:/www.ncpgambling.org'){
      window.location.href = "/";
    }
    if (location.pathname =='/online-baccarat/jackpot-central.aspx'){
      window.location.href = "/online-baccarat";
    }
    if (location.pathname =='/casino-bonus.asp'){
      window.location.href = "/casino-bonuses";
    }
    if (location.pathname =='/de/mobile'){
      window.location.href = "/mobile-casinos";
    }
    if (location.pathname =='/download.asp'){
      window.location.href = "/download-casinos";
    }
    if (location.pathname =='/jackpot-central.aspx'){
      window.location.href = "/progressive-jackpots";
    }
    if (location.pathname =='/game/'){
      window.location.href = "/casino-games";
    }
    if (location.pathname =='/index-en.aspx'){
      window.location.href = "/casino-game-index";
    }
    if (location.pathname =='/support.asp'){
      window.location.href = "/contact-us";
    }
    if (location.pathname =='/online-roulette/win-at-roulette.aspx'){
      window.location.href = "/online-roulette/how-to-play-roulette";
    }
    if (location.pathname =='/online-roulette/index.asp'){
      window.location.href = "/online-roulette";
    }
    if (location.pathname =='/live-dealer/?btag=w5692c314p001b12265d&btag2=1'){
      window.location.href = "/live-dealer-casinos";
    }
    if (location.pathname =='/online-blackjack/online-blackjack-tips/the-three-most-fatal-blackjack-strategies.asp'){
      window.location.href = "/online-blackjack/blackjack-tips";
    }
    if (location.pathname =='/online-blackjack/online-blackjack-tips/the-three-most-fatal-blackjack-strategies.asp'){
      window.location.href = "/online-blackjack/blackjack-tips";
    }
   
  }
  

}

