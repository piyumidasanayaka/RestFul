import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({  
  providedIn: 'root'
})
export class HotelDataSeviceService {

  constructor(private http : HttpClient ) { }

  /*sends get request nd returns its response data */
  getHotelData(){
    return this.http.get('https://my-json-server.typicode.com/piyumidasanayaka/RestFul /markers')
  }
}
