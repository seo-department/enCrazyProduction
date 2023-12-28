import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rich-palms-casino-review',
  templateUrl: './rich-palms-casino-review.component.html',
  styleUrls: ['./rich-palms-casino-review.component.scss']
})
export class RichPalmsCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Honest Rich Palms Casino Review 2024 - Is Rich Palms a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Trusted Rich Palms Casino review. Sign up to claim your $2,500 welcome bonus from Rich Palms Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Rich Palms Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
