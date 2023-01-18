import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from "../../shared/user";
import {ActivatedRoute} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() PData: string;
  @Input() user: FormGroup;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  address:string='';
  private event = new EventEmitter();
  constructor(private userService: UserService,private activatedRoute: ActivatedRoute) { }
  public users: Array<User>;
  clicked: boolean;


  ngOnInit() {
    this.getUsers();
    this.userService.subject.subscribe((d) => {
      this.user.value.salary = d ;

    });
  }


  sendMessage(message) {
    this.userService.sendMessage(message);
  }

  public getUsers () :void {
    this.activatedRoute.data.subscribe(
      (res) => {
        this.users= res.users;
        console.log(this.users);
      }
    )
  }
  showUser() {
    this.buttonClicked.emit(this.user.value);
    this.clicked = true;
    console.log(this.user.value);
  }
  @Input() incrementAge() {
  this.user.value.age += 2;
  console.log(this.user.value.age);
  }

  public deleteUser(id: number) : void {
    this.userService.DeleteUser(id).subscribe(
      () => {
        console.log("user deleted");
      },
      err => console.error('Observer got an error: ' + err)
    );
  }
  showSuccessMessage(
    title, message, icon = null,
    showCancelButton = true) {
    return Swal.fire({
      title: title,
      text: message,
      icon: icon,
      showCancelButton: showCancelButton
    })
  }

  checkEvent(salary) {
    if (salary >= 3000) {
      this.event.emit(this.showSuccessMessage(
        '',
        'you reached the limit',
        'error',
        true,
      ));
    }
    else{
      this.event.emit(this.showSuccessMessage(
        '',
        'you did not reach the limit',
        'success',
        true,
      ));
    }

  }
}
