import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-comic-play-casino-review',
  templateUrl: './comic-play-casino-review.component.html',
  styleUrls: ['./comic-play-casino-review.component.scss']
})
export class ComicPlayCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Comic Play Casino Review 2023 - Is Comic Play a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Comic Play Casino review. Sign up to claim your 275% welcome bonus from Comic Play Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Comic Play Casino Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
