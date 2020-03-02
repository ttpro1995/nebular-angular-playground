import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jupyter-embed',
  templateUrl: './jupyter-embed.component.html',
  styleUrls: ['./jupyter-embed.component.scss']
})
export class JupyterEmbedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  replaceTargetSelf(){
    var iframe   = document.getElementById('iframeId');
    
  }

}
