import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent implements OnInit {


  constructor() { }

  parentForm : FormGroup;

  ngOnInit() {
    this.parentForm = new FormGroup({
      name: new FormControl(Validators.required),
      email: new FormControl(Validators.required),
      age: new FormControl(Validators.required),
      phone: new FormControl(Validators.required)
    })
  }




}
