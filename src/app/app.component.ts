import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mbs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myBookStore';
  // link:string = '/book';
  constructor(private router: Router){

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
  // consoleData(val)
}
