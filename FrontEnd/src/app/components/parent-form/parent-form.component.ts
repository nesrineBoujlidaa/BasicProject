import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent implements OnInit {


  constructor(private userService: UserService) { }

  public users: Array<User>;

  parentForm : FormGroup;

  ngOnInit() {
    this.getUsers();
    this.parentForm = new FormGroup({
      name: new FormControl(Validators.required),
      email: new FormControl(Validators.required),
      age: new FormControl(Validators.required),
      phone: new FormControl(Validators.required)
    })
  }
  public getUsers () :void {
    this.userService.GetUsers().subscribe(
      (res: Array<User>) => {
        this.users= res;
        console.log(this.users);
      }
    )
}




}
