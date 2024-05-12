import { environment } from './../../environments/environment.development';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/Common/http'

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private _httpclient: HttpClient;
  private url: typeof environment;

  constructor(httpclient: HttpClient) {
    this._httpclient=httpclient;
    this.url = environment
   }
}

