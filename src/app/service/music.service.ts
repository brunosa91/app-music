import { MusicListCreate } from './../model/list.model';
import { environment } from './../../environments/environment.development';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Music, MusicList } from '../model/list.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private _httpclient: HttpClient;
  private url: typeof environment.api;

  constructor(httpclient: HttpClient) {
    this._httpclient=httpclient;
    this.url = environment.api
   }

   obterList(){
    return this._httpclient.get<MusicList[]>(this.url +'/list')
   }
   obterListId(){
    return this._httpclient.get<MusicList[]>(this.url +'/list/{id}')
   }


  cadastrarList(list:MusicListCreate){
    return this._httpclient.post<MusicListCreate>(this.url + '/list',list)

  }
}

