import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss']
})
export class TagInputComponent implements OnInit {
  items = ["Pusheen", "Stormy", "Thomas"]
  constructor(private formBuilder: FormBuilder) { 
    this.tagForm = this.formBuilder.group({
      tags: [''],
    });
  }
  tagForm;


  ngOnInit(): void {

  }

  onSubmit(value){
    console.log(value);
  }

}
