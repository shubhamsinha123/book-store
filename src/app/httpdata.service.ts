import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpdataService {

  constructor(private http:HttpClient)  {}

apiUrl = "https://us-central1-book-store-api-51848.cloudfunctions.net";

getData(url)
{
    return this.http.get(this.apiUrl+url)
    
}
postData(url,data){
  return this.http.post(this.apiUrl+url,data);
}
}