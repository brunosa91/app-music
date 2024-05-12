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
  list :MusicList[] = []
  constructor(musicService:MusicService){
    console.log("to aquiiii", environment.api)
  }

  obterListDeMusica(){

  }
}
