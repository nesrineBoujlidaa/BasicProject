import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../shared/user";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent implements OnInit {


  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
              private fb:FormBuilder) { }

  public users: Array<User>;
  address:string;

  salary:number;

  public user: User = {
    id: 0,
    name: "",
    age: 0,
    email: "",
    phone:"",
    salary: 500,
    address:""

 }

 parentForm: FormGroup;

  ngOnInit() {


    this.userService.subject.subscribe((d) => {
      this.salary = d ;
    });
    this.compare(this.salary);
    this.getUsers();
    this.parentForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      salary: ['', Validators.required],
      address: ['', Validators.required],

    })

  }

  public getUsers () :void {
    this.activatedRoute.data.subscribe(
      (res) => {
        this.users= res.users;
      }
    )
}
  compare(salary){
    if(salary>3000){
      alert ("too much");
    }
  }


  public createUser(): void {
    this.parentForm.value.address= this.parentForm.get('address').value;
    console.log(this.parentForm.value.address);
    console.log(this.parentForm.get('address').value);
    this.userService.CreateUser(this.parentForm.value).subscribe(
      () => {
        console.log(this.parentForm.value);
      },
      err => console.error('Observer got an error: ' + err)

    );
  }

  parentEventHandler(valueEmitted){
    this.user.salary = valueEmitted;
  }


}
