import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-doctor-love',
  templateUrl: './doctor-love.component.html',
  styleUrls: ['./doctor-love.component.scss']
})
export class DoctorLoveComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Doctor Love Slot Review - Jackpot, RTP & Game Info [Microgaming]');
    this.metaService.addTags([
      {name: 'description', content: 'Book an appointment with Microgaming’s love physician n the Doctor Love slot game. This slot features 5-reels, 20 paylines, free spins, a wild & scatter!'},
      { name: 'keywords', content: 'Doctor Love Slot Review' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
