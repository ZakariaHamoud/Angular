import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TestService {


    constructor(
        private http: HttpClient
    ) { }

    getInfo() {

        return this.http.get('https://run.mocky.io/v3/ec762773-24bb-45ad-9360-029fd281dcc8');
    }
}