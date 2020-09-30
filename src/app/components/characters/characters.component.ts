import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PotterService } from '../../services/potter.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  public id_house : any ={};

  constructor(  public activR : ActivatedRoute,
                public _poterService :PotterService) {

    this.activR.params.subscribe(params =>{

      console.log(params)

  })

  }

  ngOnInit(): void {
  }

}
