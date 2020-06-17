import { Component, OnInit, Input } from '@angular/core';

//services
import { PotterService } from '../../services/potter.service';

//models
import { CharacterInterface } from '../../models/characters.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {
  public character: CharacterInterface;
  
  
  
  constructor(/*private _potterService : PotterService*/) { }

  //filterCharacters = '';
  
  ngOnInit(): void {

    /*this.getCharacters();*/
  }

  /*getCharacters(){
  this._potterService.getCharacters()
  .subscribe((characters: CharacterInterface)=>this.character = characters)
  

error =>{
  console.log(<any>error);
}

}*/

}
