import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Models
import { HouseInterface } from 'src/app/models/house-interface';

//Services
import { PotterService } from '../../services/potter.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.sass'],
})
export class HouseComponent implements OnInit {
  public id_house: any = [];
  public house: HouseInterface;

  constructor(
    private _potterService: PotterService,
    public activR: ActivatedRoute
  ) {
    //Take of parameter sent by url from houses page
    this.activR.params.subscribe((params) => {
      this.getHouse(params['id']);
    });
  }

  // Variable for filterpipe seacrh
  filterCharacters = '';

  ngOnInit(): void {}


  getHouse(id: string) {
    this._potterService.getHouse(id).subscribe((data: HouseInterface) => {
      this.house = data;
    });
  }
}
