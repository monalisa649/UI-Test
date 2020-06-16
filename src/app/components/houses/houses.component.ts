import { Component, OnInit } from '@angular/core';
import { PotterService } from '../../services/potter.service';
import { HouseInterface } from '../../models/house-interface';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.sass']
})
export class HousesComponent implements OnInit {
  public house : HouseInterface;
  public idHouse : string;

  constructor(
    private _potterService : PotterService,
    private route: ActivatedRoute,
    private router: Router
    ) { 
   
  }
  
  ngOnInit(): void {

    this.getHouses();
  }

  getHouses(){
    this._potterService.getHouses().subscribe((houses: HouseInterface)=>
      
        this.house = houses
        ) 
        error =>{
        console.log(<any>error);
      }
    
  }

  listCharacters(){
    this.router.navigate(['/characters']);
  }
}
