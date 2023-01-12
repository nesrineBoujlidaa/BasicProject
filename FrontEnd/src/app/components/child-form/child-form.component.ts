import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit {

  constructor() { }
  childForm : FormGroup;

  ngOnInit() {
    this.childForm = new FormGroup({
      salary: new FormControl(Validators.required),
      address: new FormControl(Validators.required)
    })
  }

}
