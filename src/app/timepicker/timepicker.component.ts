import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit {
  startDateTime: Date;
  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.startDateTime)
    const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit' }) ;
    const [{ value: mo },,{ value: da },,{ value: ye },,{value: h}] = dtf.formatToParts(this.startDateTime) ;
    const fullDateFormatOutput = dtf.formatToParts(this.startDateTime);
    // console.log(`${da}-${mo}-${ye}`)
    const parseDateTimeStr = `${ye}/${mo}/${da}/${h}`;
    console.log(parseDateTimeStr);
    console.log(fullDateFormatOutput);
  }

}
