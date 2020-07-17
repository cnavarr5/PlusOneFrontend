import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as data from '../users.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[];
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.users = data[0].users;
  }
  
}

class User {
  name: string;
  desc: string;
}