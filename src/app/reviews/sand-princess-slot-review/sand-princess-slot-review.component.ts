import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sand-princess-slot-review',
  templateUrl: './sand-princess-slot-review.component.html',
  styleUrls: ['./sand-princess-slot-review.component.scss']
})
export class SandPrincessSlotReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Sand Princess Review – Play sand-princess at American Microgaming casinos');
    this.metaService.addTags([
      {name: 'description', content: 'sand-princess slot review. Battle it out with the kings of the beasts as these big boys leap from the reels. Another epic US slot game from Microgaming.'},
      { name: 'keywords', content: 'Sand princess slot review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
