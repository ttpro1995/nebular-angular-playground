import { Component, OnInit } from '@angular/core';
import { NbMenuComponent, NbMenuItem } from '@nebular/theme';


@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {
  
  items: NbMenuItem[] = [
    {
      title: 'neupage',
      link: '/neupage'
    },
    {
      title: 'jupyter',
      link: '/jupyter'
    },
    {
      title: 'tablepage',
      link: '/tablepage'
    },
    {
      title: 'timepicker',
      link: '/timepicker'
    },
    {
      title: 'datetimepicker',
      link: '/datetimepicker'
    }
   ];

  constructor() { }

  ngOnInit() {
  }

}
