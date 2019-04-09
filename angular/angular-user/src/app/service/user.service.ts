import { Injectable } from '@angular/core';
import{ User} from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // users:User[];
  users =[
    {id:1,name:'long'},
    {id:2,name:'long2'},
    {id:3,name:'long3'},
  ];
  constructor() { }
  getUsers(){
    return this.users;
  }
}
