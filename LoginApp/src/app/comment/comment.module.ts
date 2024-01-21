import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    exports: [
        CommentComponent,
        CommentDetailsComponent
    ],
    declarations: [
        CommentComponent,
        CommentDetailsComponent
    ],
    providers: [],
})
export class CommentComponentModel { }
