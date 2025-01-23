import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-las-atlantis-casino-review',
  templateUrl: './las-atlantis-casino-review.component.html',
  styleUrls: ['./las-atlantis-casino-review.component.scss']
})
export class LasAtlantisCasinoReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Last Atlantis Casino Review 2025 - Is Las Atlantis a Safe Casino?');
    this.metaService.addTags([
      {name: 'description', content: 'Honest Las Atlantis Casino review. Sign up to claim your $14,000 welcome bonus from Last Atlantis Casino. Read our trusted casino review here.'},
      { name: 'keywords', content: 'Las Atlantis Casino review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
