import { Component, OnInit } from '@angular/core';
import { PotterService } from '../../services/potter.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.sass']
})
export class HousesComponent implements OnInit {

  constructor(private _potterService : PotterService) { }

  ngOnInit(): void {
    this.getHouses();
  }

  getHouses(){
    this._potterService.getHouses().subscribe(
      result =>{
        console.log(result);
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
}
