import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {

    constructor (
        private router : Router
    ){
    }

    submit() {
        this.router.navigate(['users']);
    }
}