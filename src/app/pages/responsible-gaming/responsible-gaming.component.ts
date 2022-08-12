import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-responsible-gaming',
  templateUrl: './responsible-gaming.component.html',
  styleUrls: ['./responsible-gaming.component.scss']
})
export class ResponsibleGamingComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Responsible Gaming - Responsible USA Online Casino Sites');
    this.metaService.addTags([
      {name: 'description', content: 'Responsible gambling should be a #1 priority of every online casino player. Our recommended online casinos are recognised third parties for responsible gaming.'},
      { name: 'keywords', content: 'Responsible Gaming' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
