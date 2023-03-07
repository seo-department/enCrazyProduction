import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-thunderstruck-two-online-slot-review',
  templateUrl: './thunderstruck-two-online-slot-review.component.html',
  styleUrls: ['./thunderstruck-two-online-slot-review.component.scss']
})
export class ThunderstruckTwoOnlineSlotReviewComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Thunderstruck 2 Online Slot Review – Play Thunderstruck review at American Microgaming casinos');
    this.metaService.addTags([
      {name: 'description', content: 'Thunderstruck 2 Online slot review. Battle it out with the kings of the beasts as these big boys leap from the reels. Another epic US slot game from Microgaming.'},
      { name: 'keywords', content: 'Thunderstruck 2 Online Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);

  }

}
