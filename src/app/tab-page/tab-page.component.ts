import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.scss']
})
export class TabPageComponent implements OnInit {

  constructor() {
  }

  tabs = [
    {
      title: 'Route neu page #1',
      route: './neupage',
      icon: 'home',
      responsive: true, // hide title before `route-tabs-icon-only-max-width` value
    },
    {
      title: 'Route table page #2',
      route: ['./tablepage'],
    },
    {
      title: 'Transaction',
      icon: 'flash-outline',
      responsive: true,
      disabled: true,
    },
  ];

  ngOnInit(): void {
  }

}
