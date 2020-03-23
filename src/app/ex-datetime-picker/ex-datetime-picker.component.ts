import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-datetime-picker',
  templateUrl: './ex-datetime-picker.component.html',
  styleUrls: ['./ex-datetime-picker.component.scss']
})
export class ExDatetimePickerComponent implements OnInit {
  selectedMoments: Date;
  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.selectedMoments);
  }

}
