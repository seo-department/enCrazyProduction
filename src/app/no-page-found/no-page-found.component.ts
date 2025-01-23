// import { Component, OnInit } from '@angular/core';
import { Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { RESPONSE, REQUEST } from '@nguniversal/express-engine/tokens';
import { isPlatformServer } from '@angular/common';
import { Request, Response } from 'express';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
// import { SEOMetaService } from 'src/app/services/seo-meta.service';



import { CanonicalService } from '../core/canonical.service';
import { Injector } from '@angular/core';
import * as $ from 'jquery';
// import {Component, NgModule,ViewChild,ElementRef} from '@angular/core'
// import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrls: ['./no-page-found.component.scss']
})
export class NoPageFoundComponent implements OnInit {
 
  constructor(private location: Location, private metaService: Meta, private metaTitle: Title,
    @Optional() @Inject(REQUEST) private request: Request,
    @Optional() @Inject(RESPONSE) private response: Response,
    @Inject(PLATFORM_ID) private platformId: any,private route:ActivatedRoute,
    private router:Router) { }
 
  
  ngOnInit(): void {
    // document.getElementById('.col-sm-4').hidden = true;
    // this.canonical.createCanonicalURL();
    if (isPlatformServer(this.platformId)) {
      this.response.status(404);
    }

    if(this.route.snapshot.url[0].path.toLowerCase()!==this.route.snapshot.url[0].path)
    this.router.navigate([this.route.snapshot.url[0].path.toLowerCase()]);

    this.metaTitle.setTitle('Page not found - en.crazyvegas.com');
    this.metaService.addTags([
      {name: 'description', content: 'Best Online Casinos USA (2025)  Compare Top USA Casino Sites.'},
      { name: 'keywords', content: 'Page not found' },
      { name: 'robots', content: 'Index,follow' },
      { charset: 'UTF-8' },

    ]);
  }

  back(): void {
    this.location.back()
  }
}
