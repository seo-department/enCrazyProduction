import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pure-platinum-slot-review',
  templateUrl: './pure-platinum-slot-review.component.html',
  styleUrls: ['./pure-platinum-slot-review.component.scss']
})
export class PurePlatinumSlotReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('pure-platinum Review – pure-platinum at American Microgaming casinos');
    this.metaService.addTags([
      {name: 'description', content: 'pure-platinum slot review. Battle it out with the kings of the beasts as these big boys leap from the reels. Another epic US slot game from Microgaming.'},
      { name: 'keywords', content: 'Pure platinum slot review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
