import { Component, OnInit } from '@angular/core';
import { HttpdataService } from '../httpdata.service';

@Component({
  selector: 'mbs-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private dataser:HttpdataService) { }

  ngOnInit(): void {
   this.getuserdata
  }
  getuserdata(){
    this.dataser.getData('/user').subscribe((res)=>{
      console.log(res)
    })

  }
  createuserdata(){
    let usereq = {
      name:'subham kumar sinha',
      team:2
    }
    this.dataser.postData('/user',usereq).subscribe((res)=>{
      console.log(res);
    })
  }
}
