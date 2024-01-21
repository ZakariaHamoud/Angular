import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DatabaseComponent } from './database/database.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [

  {
  path:"login",
  component: LoginComponent
  },
  {
    path:"users",
    component: DatabaseComponent
  },
  {
    path:"commentsCard",
    component: CommentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
