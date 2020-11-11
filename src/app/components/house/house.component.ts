import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { HouseInterface } from 'src/app/models/house-interface';
import { PotterService } from '../../services/potter.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.sass']
})
export class HouseComponent implements OnInit {
  public id_house : any =[];
  public house : HouseInterface ;


  constructor(
    private _potterService : PotterService,
    public activR : ActivatedRoute,
     ) {
      this.activR.params.subscribe(params =>{

        console.log(params)
        this.getHouse(params['id']);


    })

     }

// Variable for filterpipe
 filterCharacters = '';

  ngOnInit(): void {
  }

  getHouse(id: string){
    this._potterService.getHouse(id).subscribe((data: HouseInterface) =>{
      this.house = data
      console.log(data)
    })
  }

}
