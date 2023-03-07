import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hi-lo-roller-slot-review',
  templateUrl: './hi-lo-roller-slot-review.component.html',
  styleUrls: ['./hi-lo-roller-slot-review.component.scss']
})
export class HiLoRollerSlotReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('hi-lo-roller Review – Play hi-lo-roller at American Microgaming casinos');
    this.metaService.addTags([
      {name: 'description', content: 'hi-lo-roller slot review. Battle it out with the kings of the beasts as these big boys leap from the reels. Another epic US slot game from Microgaming.'},
      { name: 'keywords', content: 'Hi lo roller Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
