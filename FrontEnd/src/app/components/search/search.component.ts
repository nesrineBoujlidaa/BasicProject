import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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

}
