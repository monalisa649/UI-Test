import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PotterService } from '../../services/potter.service';
import { CharacterInterface } from '../../models/characters.interface';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  public id_house : any ={};
  public character : any;

  constructor(  public activR : ActivatedRoute,
                public _poterService :PotterService) {

    this.activR.params.subscribe(params =>{

      console.log(params)

  })

  }

  ngOnInit(): void {
    //this.getCharacters();
  }

  /*getCharacters(){
    this._poterService.getCharacters()
    .subscribe((data : any)=>{

      this.character = data

      console.log(this.character,'pagina character');
    })


  error =>{
    console.log(<any>error);
  }

  }*/
}
