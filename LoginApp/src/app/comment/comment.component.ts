import { Component,NgModule,ViewChild } from '@angular/core';
import { TestService } from '../database/test.service';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { NgModel } from '@angular/forms';

export type DetailsModel = {
  id: string;
  name: string;
  dob: string;
  phone: string;
  comments : [];
}


@Component({
  selector: 'app-comment-component',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent {

  @ViewChild(CommentDetailsComponent) commentDetails!: CommentDetailsComponent;

  ELEMENT_DATA: DetailsModel[] = []

   constructor(
    private x : TestService
   ){ 
      this.x.getInfo().subscribe((res: any) => {
      this.ELEMENT_DATA = res;
    })
    
   }
}
