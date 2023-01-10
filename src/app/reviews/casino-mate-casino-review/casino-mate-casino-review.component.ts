import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-casino-mate-casino-review',
  templateUrl: './casino-mate-casino-review.component.html',
  styleUrls: ['./casino-mate-casino-review.component.scss']
})
export class CasinoMateCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Casino-Mate – A Trusted Casino Review 2023');
    this.metaService.addTags([
      {name: 'description', content: 'Casino-Mate gives new players a $1,400 free welcome bonus, and 80 free spins. Read all about the casino bonuses, and games available at this top online casino.'},
      { name: 'keywords', content: 'Slot Madness Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
