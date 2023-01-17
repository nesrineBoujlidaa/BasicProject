import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from "../../shared/user";
import {ActivatedRoute} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";

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

}
