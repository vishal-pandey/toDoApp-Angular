import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  testService(){
  	console.log("Test SuccessFul");
  }
}
