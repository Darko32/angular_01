import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';

import { FormsModule } from '@angular/forms';
import { EditPostsComponent } from './header/edit-posts/edit-posts.component';
import { DeletePostsComponent } from './header/delete-posts/delete-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    EditPostsComponent,
    DeletePostsComponent
    
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
