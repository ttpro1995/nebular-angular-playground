import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit {

  featureInfo = {"featureName":"test1","description":"this is test enty","owner":"thient","featureHdfsDirectory":"/data/path/to/test/entry/1","src":"test1_original_src","srcHdfsDirectory":"/data/path/to/src/1"}; //
  constructor() { }

  ngOnInit() {
  }

}
