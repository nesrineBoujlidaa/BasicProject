import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from "../../shared/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() PData: string;
  @Input() user: User;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  address:string='';
  constructor(private activatedRoute: ActivatedRoute) { }
  public users: Array<User>;


  ngOnInit() {
    this.getUsers();
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
    this.buttonClicked.emit(this.user);
    console.log(this.user);
  }

}
