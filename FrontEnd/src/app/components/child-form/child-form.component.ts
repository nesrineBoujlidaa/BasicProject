import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit {

  constructor(private userService: UserService) { }
  childForm : FormGroup;
  @Output()
  buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  /* public user: User = {
    id: 0 ,
    name: "",
    age: "",
    email: "",
    phone:"",
    salary: 500,
    address: ""
  }

   */
  @Input() user: User;

  ngOnInit() {
    this.childForm = new FormGroup({
      address: new FormControl()
    })
  }


  public getUser() :void {
    this.userService.GetUser(1).subscribe(
      (res: User) => {
        this.user= res;
        console.log(this.user);
      }
    )
  }
  incrementSalary() {
    this.buttonClicked.emit(Math.round(this.user.salary + 500) );
    console.log(this.user.salary);
  }

}
