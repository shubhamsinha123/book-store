import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mbs-registermodule',
  templateUrl: './registermodule.component.html',
  styleUrls: ['./registermodule.component.css']
})
export class RegistermoduleComponent implements OnInit {
  register: string;
    constructor(private router: Router) {
    this.register = '/register';
   }
  ngOnInit(): void {
  }

}
