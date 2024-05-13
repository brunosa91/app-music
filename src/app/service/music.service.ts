import { MusicListCreate } from './../model/list.model';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Music, MusicList } from '../model/list.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private _httpclient: HttpClient;
  private url: string;;

  constructor(httpclient: HttpClient) {
    this._httpclient=httpclient;
    this.url = `${environment.api}/list`
   }

   obterList(){
    return this._httpclient.get<MusicList[]>(this.url )
   }
   obterListId(){
    return this._httpclient.get<MusicList[]>(this.url +'/{id}')
   }


  cadastrarList(list:MusicListCreate){
    return this._httpclient.post<MusicListCreate>(this.url ,list)

  }

  removerList(nome:string){
    return this._httpclient.delete<void>(`${this.url}/${nome}`);
  }
}

