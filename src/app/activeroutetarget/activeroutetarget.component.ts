import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-activeroutetarget',
  templateUrl: './activeroutetarget.component.html',
  styleUrls: ['./activeroutetarget.component.scss']
})
export class ActiveroutetargetComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  routeTarget="default";

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      if (params.has("target")){
        this.routeTarget = params.get('target');
      }
    });
  }
}
