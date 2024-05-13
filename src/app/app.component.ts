import { Observable } from 'rxjs';
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
 // lists :MusicList[] = []
    lists$ = new Observable<MusicList[]>();

    id = '';
    nome='';
    descricao=''
    musicas=[]


  constructor(private musicService:MusicService){
    this.obterListDeMusica()
  }

  obterListDeMusica(){
  //  this.musicService.obterList().subscribe(lists => this.lists = lists)
  this.lists$ = this.musicService.obterList();

  }

  cadastraList(){
    this.musicService.cadastrarList({nome:this.nome,descricao:this.descricao, musicas:this.musicas})
    .subscribe(()=>this.musicService.obterList())
  }
}
