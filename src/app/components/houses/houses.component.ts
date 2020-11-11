import { Component, OnInit } from '@angular/core';
import { HouseInterface } from '../../models/house-interface';
import { Router, ActivatedRoute} from '@angular/router';
//models
import { PotterService } from '../../services/potter.service';
import { CharacterInterface } from '../../models/characters.interface';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.sass']
})
export class HousesComponent implements OnInit {
  public house : HouseInterface;
  public character: CharacterInterface;
  public imgHouse: string [];
  public houseId : any;



  constructor(
    private _potterService : PotterService,
    private route: ActivatedRoute,
    private router: Router
    ) {

  //Array of images
      this.imgHouse = [
        "assets/img/pexels-photo.jpeg",
        "assets/img/pexels-photo2.jpeg",
        "assets/img/pexels-photo3.jpeg",
        "assets/img/mont-saint.jpg"
      ];
  }
  // Variable for filterpipe
  filterCharacters = '';

  ngOnInit(): void {
//Method for subscribe
    this.getHouses();


  }



  getHouses(){
    this._potterService.getHouses().subscribe((houses: HouseInterface)=>{

      this.house = houses
      console.log(this.house)
    })

        error =>{
        console.log(<any>error);
      }

  }



  verHouse(house: HouseInterface ){
    this.houseId = house._id;
    console.log(this.houseId);
    this.router.navigate(['/house', this.houseId]);

  }





}
