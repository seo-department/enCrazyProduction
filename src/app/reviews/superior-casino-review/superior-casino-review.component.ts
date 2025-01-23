import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-superior-casino-review',
  templateUrl: './superior-casino-review.component.html',
  styleUrls: ['./superior-casino-review.component.scss']
})
export class SuperiorCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Honest Superior Casino Review 2025 – Is Superior Casino Safe?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Superior Casino review. Sign up to claim your $7,500 welcome bonus from Superior Casino. Read our honest casino review here.'},
      { name: 'keywords', content: 'Superior Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
