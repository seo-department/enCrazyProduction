import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Roulette Tips - Essential Tips on How to Win at Roulette');
    this.metaService.addTags([
      {name: 'description', content: 'Find the best Roulette tips at Crazy Vegas and win big. Learn top betting tips and strategies for playing roulette and take your game to the next level!'},
      { name: 'keywords', content: 'Roulette Tips' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
