import { Component } from '@angular/core';
import{HotelDataSeviceService} from './hotel-data-sevice.service';
import {hotel} from './hotelDataModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 

hotels: hotel[];
  constructor(private hotelService : HotelDataSeviceService){
  }
  ngOnInit(){
    this.hotelService.getHotelData()
    .subscribe((data : hotel[])=>{  //data ekath ekka ena dewal analyze kara gannawa.
          this.hotels= data;
    }

  )   ;                       
  }
 
}
