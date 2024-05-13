import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MusicList } from '../model/list.model';
import { MusicService } from '../service/music.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  title = 'app-music';
  // lists :MusicList[] = []
     lists$ = new Observable<MusicList[]>()

   constructor(private musicService:MusicService){
     this.obterListDeMusica()
   }

   obterListDeMusica(){
   //  this.musicService.obterList().subscribe(lists => this.lists = lists)
   this.lists$ = this.musicService.obterList();

   }

}
