import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { DetailsModel } from '../comment.component';

export type CommentDetails = {
  date: string;
  text: string;
}
@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrl: './comment-details.component.css'
})
export class CommentDetailsComponent {
  @Input() theData: DetailsModel | null = null;

  ELEMENT_DATA: CommentDetails[] = [];

  constructor(
   ){ 
      this.ELEMENT_DATA = this.theData?.comments || [];
    }
}
