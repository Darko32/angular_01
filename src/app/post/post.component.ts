import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  description: string = ""

  constructor( private usersService: UsersService) { }

  ngOnInit(): void {
  }

  // loadValues(formValue: NgForm){
  //   let userDetails = {
  //     firstname: 'ABC'
  //   }
  //   formValue.setValue(userDetails);
  // }
  addCustomer(formValue: NgForm){
    console.log(formValue.value);

    const postBbody = {
      // title: formValue.value.description,
      body: formValue.value.description
    };
    // console.log(postBbody)

    this.usersService.addPost(postBbody).subscribe(data => {
      console.log(data);
    }, (err) => {
      console.log("Unable to add post");
    })
  }
  // resetForm(formValue: NgForm){
  //   formValue.resetForm();
  // }

}
