import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-delete-posts',
  templateUrl: './delete-posts.component.html',
  styleUrls: ['./delete-posts.component.css']
})
export class DeletePostsComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }
  deletePost(){
    this.userService.deletePost(1).subscribe(data => {
      console.log("User deleted successfully" + data)
    }, (err) => {
      console.log("Unable to delete the post" + err);
    })
  }

}
