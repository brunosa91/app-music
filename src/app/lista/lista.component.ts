import { Component, OnInit } from '@angular/core';
import { MusicList } from '../model/list.model';
import { MusicService } from '../service/music.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  title = 'app-music';
     lists :MusicList[] = []
     id = '';
     nome='';
     descricao=''
     musicas=[]


   constructor(private musicService:MusicService){
     this.obterListDeMusica()
   }
   ngOnInit(): void {

   }

   obterListDeMusica(){
    this.musicService.obterList().subscribe(lists => this.lists = lists)

   }


  cadastraList(){
    this.musicService.cadastrarList({nome:this.nome,descricao:this.descricao, musicas:this.musicas})
    .subscribe(()=>this.musicService.obterList())
  }

  remover(nome:string){
    this.musicService.removerList(nome)
    .subscribe(()=> this.obterListDeMusica());

  }
}
