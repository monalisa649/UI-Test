import { Component, OnInit } from '@angular/core';
import { PotterService } from '../../services/potter.service';
import { HouseInterface } from '../../models/house-interface';
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.sass']
})
export class HousesComponent implements OnInit {
  public house : HouseInterface;
  constructor(private _potterService : PotterService) { }

  ngOnInit(): void {
    this.getHouses();
  }

  getHouses(){
    this._potterService.getHouses().subscribe((houses: HouseInterface)=>
      
        this.house = houses)
        
      
      error =>{
        console.log(<any>error);
      }
    
  }
}
