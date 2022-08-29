import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-android-casinos',
  templateUrl: './android-casinos.component.html',
  styleUrls: ['./android-casinos.component.scss']
})
export class AndroidCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Android Casinos – Top 10 Real Money Android Apps');
    this.metaService.addTags([
      {name: 'description', content: 'Looking for the top 10 Android Casinos? Android casino apps offer safe mobile casino gaming plus the up to $3000 in Andriod bonuses.'},
      { name: 'keywords', content: 'Android Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
