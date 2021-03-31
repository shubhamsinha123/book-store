import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data-service.service';
// import * as EventEmitter from 'node:events';
// import { emit } from 'node:process';

@Component({
  selector: 'mbs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  link: string;
@Output() newItemEvent = new EventEmitter<string>();
  // constructor(private router: Router) {
    constructor(private router: Router, private dataService: DataService) {
    this.link = '/book';
   }

  ngOnInit(): void {
    this.dataService.myFname = 'Subham';
    this.dataService.myLname = 'sinha';
    console.log(this.dataService.myFname);
    console.log(this.dataService.myLname);
  }
  goTo(data?)
  {
    if(data)
    {
    this.router.navigateByUrl(data);
  }
  else
  {
    console.log('no data')
  }
  }

  update(){
    // this.newItemEvent = emit()
  }
}
