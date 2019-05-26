import { Component, OnInit } from '@angular/core';
import {MainService} from '../../services/main.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public mS:MainService,
  	public cS:CookieService) { }

  taskList = []

  ngOnInit() {
  	if (this.cS.get('task') != "") {
	  	this.taskList = JSON.parse(this.cS.get('task'));
  	}
  	// this.cS.deleteAll();
  }

  addTask(taskName){
  	if (taskName == "") {
  		return ;
  	}
  	this.taskList.push(taskName);
  	this.cS.set('task',JSON.stringify(this.taskList));
  }

  scrollBottom(){
    document.querySelector('ul').scrollTo(0, document.querySelector('ul').scrollHeight+100);
    document.querySelector('ul').scrollTo(0, document.querySelector('ul').scrollHeight+100);
    document.querySelector('ul').scrollTo(0, document.querySelector('ul').scrollHeight+100);
    document.querySelector('ul').scrollTo(0, document.querySelector('ul').scrollHeight+100);
    document.querySelector('ul').scrollTo(0, document.querySelector('ul').scrollHeight+100);
  }

  deleteTask(taskName){
  	this.taskList.splice(this.taskList.indexOf(taskName), 1);
  	this.cS.set('task',JSON.stringify(this.taskList));
  }

}
