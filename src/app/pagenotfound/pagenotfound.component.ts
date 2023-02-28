import { Component, OnInit, Optional, Inject, PLATFORM_ID } from '@angular/core';
import { RESPONSE, REQUEST } from '@nguniversal/express-engine/tokens';
import { isPlatformServer } from '@angular/common';
import { Request, Response } from 'express';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  constructor(@Optional() @Inject(REQUEST) private request: Request,private metaService: Meta, private metaTitle: Title,
  @Optional() @Inject(RESPONSE) private response: Response,
  @Inject(PLATFORM_ID) private platformId: any , private route:ActivatedRoute,
  private router:Router) { }

  ngOnInit(): void {
    // $('.col-sm-4').hide();
    if (isPlatformServer(this.platformId)) {
      this.response.status(404);
    }

    if(this.route.snapshot.url[0].path.toLowerCase()!==this.route.snapshot.url[0].path)
      this.router.navigate([this.route.snapshot.url[0].path.toLowerCase()]);

    this.metaTitle.setTitle('Page not found - en.crazyvegas.com');
    this.metaService.addTags([
      {name: 'description', content: 'Best Online Casinos USA (2023)  Compare Top USA Casino Sites.'},
      { name: 'keywords', content: 'Page not found' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },

    ]);
  }

}
