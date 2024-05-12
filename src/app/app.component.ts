import { MusicList } from './model/list.model';
import { MusicService } from './service/music.service';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-music';
  lists :MusicList[] = []
  constructor(private musicService:MusicService){
    this.obterListDeMusica()
  }

  obterListDeMusica(){
    this.musicService.obterList().subscribe(lists => this.lists = lists)

  }
}
