import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cyber-bingo-casino-review',
  templateUrl: './cyber-bingo-casino-review.component.html',
  styleUrls: ['./cyber-bingo-casino-review.component.scss']
})
export class CyberBingoCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('CyberBingo Casino Review 2025 - Is CyberBingo a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest CyberBingo Casino review. Sign up to claim your 40 Free Spins + $20 NDB welcome bonus from CyberBingo Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'CyberBingo Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
