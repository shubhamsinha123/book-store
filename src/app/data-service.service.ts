import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private fname: string;
  private lname: string;
  
  constructor() { }
    get myFname()
    {
      return this.fname;
    }
    get myLname()
    {
      return this.lname;
    }

    set myFname(val)
    {
      if(typeof val === 'string')
      {
        this.fname = val;
      }
      else{
        console.log("error")
      }
    }
    set myLname(val)
    {
      if(typeof val === 'string')
      {
        this.lname = val;
      }
      else{
        console.log("error")
      }
    }
  }
