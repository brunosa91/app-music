export type Music = {
  id: number,
  titulo: string,
  artista: string,
  album: string,
  ano: string,
  genero: string,
  idList: number
}

export type MusicCadastrar = Omit<Music, 'id'>;

export type MusicList = {
  id: number,
  nome: string,
  descricao: string,
  musicas: Music[]
}

export type MusicListCreate = Omit<MusicList, 'id'>;

