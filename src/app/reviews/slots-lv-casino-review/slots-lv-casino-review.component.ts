import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-slots-lv-casino-review',
  templateUrl: './slots-lv-casino-review.component.html',
  styleUrls: ['./slots-lv-casino-review.component.scss']
})
export class SlotsLvCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('SlotsLV Casino Review 2025 - Is SlotsLV a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted SlotsLV Casino review. Sign up to claim your $5,000 welcome bonus from SlotsLV Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Trusted SlotsLV Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
