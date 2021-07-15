import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  name: string,
  userName: string,
  email: string
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  deletePost(id:number): Observable<object> {
    return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id);
  }

  updatePost() {
    const putBody = {
      name: 'ABC Tutorial',
      userId: 1
    };

    return this.http.put('https://jsonplaceholder.typicode.com/users/1', putBody);
  }

  addPost(body: any) {

    return this.http.post('https://jsonplaceholder.typicode.com/users', body)
  }



  getUsers(){
    // const headers2 = new HttpHeaders({
    //   'content-type': 'application/json',
    //   'authenticationToken': '12345'
    // });

    // const params2 = new HttpParams()
    //   .set('pageNum', '10')
    //   .set('pageSize', '100')
    return this.http.get('https://jsonplaceholder.typicode.com/users');
    // const users = 
    //   {userid:1, userName: 'Darko', }

    // return users

  }
}
