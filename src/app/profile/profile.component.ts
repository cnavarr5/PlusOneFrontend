import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import * as data from '../users.json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name: string;
  desc: string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let users = data[0].users;
    let result = new Result(this.route.params);
    this.name = result.value.name;

    users.forEach(user => {
      if(this.name == user.name)
      {
        this.desc = user.desc
      }
    });
  }

}

class User {
  name: string;
  desc: string;
}

class Result {
  value: User;

  constructor(obj: any) {
    this.value = obj.value as User;
  }
}
