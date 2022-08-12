import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-emoticoins-slot-review',
  templateUrl: './emoticoins-slot-review.component.html',
  styleUrls: ['./emoticoins-slot-review.component.scss']
})
export class EmoticoinsSlotReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Emoticoins Review – Play Emoticoins at American Microgaming casinos');
    this.metaService.addTags([
      {name: 'description', content: 'Emoticoins slot review. Battle it out with the kings of the beasts as these big boys leap from the reels. Another epic US slot game from Microgaming.'},
      { name: 'keywords', content: 'Emoticoins slot review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
