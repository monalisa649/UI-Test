import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


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

  getHouses(): Observable<any>{
      return this._http.get(this.url+'/houses'+'?key='+this.key);
  }

}
