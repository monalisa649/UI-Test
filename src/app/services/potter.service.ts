import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

//models
import { HouseInterface } from '../models/house-interface';
import { CharacterInterface } from '../models/characters.interface';



@Injectable({
  providedIn: 'root'
})
export class PotterService {
  private key: string;
  private url: string;
  private characterId:string;

  constructor(
    private _http: HttpClient
  ) {
    this.key = environment.apiKey;
    this.url = environment.apiUrl;
    
  }

  getHouses(): Observable <any> {
      return this._http.get(this.url+'/houses'+'?key='+this.key);
  }

  getCharacters(): Observable <any> {
    return this._http.get(this.url+'/characters'+'?key='+this.key);
}

}
