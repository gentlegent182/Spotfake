import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biblioteca-playlist',
  templateUrl: './biblioteca-playlist.page.html',
  styleUrls: ['./biblioteca-playlist.page.scss'],
})
export class BibliotecaPlaylistPage {

  constructor(private router: Router) { }
  bibliotecaPlaylist(){

    this.router.navigate(['/biblioteca-playlist'])
  }
  
}
