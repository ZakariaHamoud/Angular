import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormControl
    ],
    exports: [
        LoginComponent,
        
    ],
    declarations: [
        LoginComponent,
        
    ],
    providers: [],
})
export class UserFeedbackModule { }
