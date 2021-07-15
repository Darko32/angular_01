import { Component, OnInit } from '@angular/core';
import { UsersService} from './../services/users.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  users: any
  constructor( private usersService: UsersService) { }

  ngOnInit(): void {
  this.usersService.getUsers().subscribe(data => {
    this.users = data;
  })
  }

}
