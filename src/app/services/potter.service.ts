import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


//models
import { HouseInterface } from '../models/house-interface';


@Injectable({
  providedIn: 'root'
})
export class PotterService {

  private key: string;
  private url: string;



  constructor(
    private _http: HttpClient
    ) {
    this.key = environment.apiKey;
    this.url = environment.apiUrl;

    }

  getHouses(): Observable <HouseInterface> {
      return this._http.get<HouseInterface>(`${this.url}/houses/?key=${this.key}`);
    }


  getHouse(id: string): Observable <HouseInterface> {
  return this._http.get<HouseInterface>(`${this.url}/houses/${ id }/?key=${this.key}`);

  }

}
