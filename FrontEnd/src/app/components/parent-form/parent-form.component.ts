import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/user";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent implements OnInit {


  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  public users: Array<User>;
  address:string='';
  status: string;

  public user = new User();

  ngOnInit() {
    this.userService.subject.subscribe((d) => {
      this.status = d;
    });

    this.getUsers();


  }
  public getUsers () :void {
    this.activatedRoute.data.subscribe(
      (res) => {
        this.users= res.users;
      }
    )
}

  public getUser() :void {
    this.userService.GetUser(1).subscribe(
      (res: User) => {
        this.user= res;
        console.log(this.user);
      }
    )
  }

  parentEventHandler(valueEmitted){
    this.user.salary = valueEmitted;
  }


}
