import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { menuLinks } from './menu-links';
import { MenuLinkItem } from '@app/models/MenuLinks';
import { ActivatedRoute } from '@angular/router';
import { state, style, transition, animate, trigger } from '@angular/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [
    trigger('scrollButton', [
      state('scrollable', style({
        bottom: '30px'
      }),
    ),
    transition('* => *', animate('0.175s ease-out')),
    ])
  ]
})
export class AppLayoutComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.pageName = data.pageName;
    });
  }

  pageName: string;

  @ViewChild('content')
  content: ElementRef;

  menuLinks: Array<MenuLinkItem>;
  canScrollToTop = false;

  scrollToTop() {
    this.content.nativeElement
      .scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
  }

  onScroll() {
    this.canScrollToTop = this.content.nativeElement.scrollTop > 0;
  }

  ngOnInit() {
    this.menuLinks = menuLinks.slice();
  }

}
