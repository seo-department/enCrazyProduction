import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quickspin-casinos',
  templateUrl: './quickspin-casinos.component.html',
  styleUrls: ['./quickspin-casinos.component.scss']
})
export class QuickspinCasinosComponent implements OnInit {

  constructor(private metaService: Meta, private metaTitle: Title) { }

  ngOnInit(): void {
    this.metaTitle.setTitle('Best Quickspin Casinos - Claim the Best Quickspin Bonuses');
    this.metaService.addTags([
      {name: 'description', content: 'Quickspin Casinos 2025. Get the best casino games online and exciting bonuses at top Quickspin Casinos. Click to find out more about Quickspin.'},
      { name: 'keywords', content: 'Quickspin Casinos' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },
    ]);
  }

}
