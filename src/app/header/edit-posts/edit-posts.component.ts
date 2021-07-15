import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css']
})
export class EditPostsComponent implements OnInit {

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.updatePost();
  }
  updatePost(){
    this.usersService.updatePost().subscribe(data => {
      console.log(data);
    }, (err) => {
      console.log(err);
    })
  }
}
