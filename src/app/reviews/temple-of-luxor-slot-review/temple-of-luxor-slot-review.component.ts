import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-temple-of-luxor-slot-review',
  templateUrl: './temple-of-luxor-slot-review.component.html',
  styleUrls: ['./temple-of-luxor-slot-review.component.scss']
})
export class TempleOfLuxorSlotReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Temple Of Luxor Review – Play temple-of-luxor at American Microgaming casinos');
    this.metaService.addTags([
      {name: 'description', content: 'temple-of-luxor slot review. Battle it out with the kings of the beasts as these big boys leap from the reels. Another epic US slot game from Microgaming.'},
      { name: 'keywords', content: 'Temple Of Luxor Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
