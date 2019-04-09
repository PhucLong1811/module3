import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    users:User[];
  
    constructor(private userService: UserService) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.users = this.userService.getUsers();
  }

}
