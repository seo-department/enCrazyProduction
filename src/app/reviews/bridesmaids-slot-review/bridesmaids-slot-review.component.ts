import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bridesmaids-slot-review',
  templateUrl: './bridesmaids-slot-review.component.html',
  styleUrls: ['./bridesmaids-slot-review.component.scss']
})
export class BridesmaidsSlotReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Bridesmaids Review – Play Bridesmaids at American Microgaming casinos');
    this.metaService.addTags([
      {name: 'description', content: 'Bridesmaids review. Battle it out with the kings of the beasts as these big boys leap from the reels. Another epic US slot game from Microgaming.'},
      { name: 'keywords', content: 'Bridesmaids review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
