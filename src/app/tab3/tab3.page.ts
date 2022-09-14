import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router) {}
 
  bibliotecaBuscar(){

    this.router.navigate(['/biblioteca-buscar'])
  }

  bibliotecaPlaylist(){

    this.router.navigate(['/biblioteca-playlist'])
  }

  bibliotecaAlbumes(){

    this.router.navigate(['/biblioteca-albumes'])
  }

  bibliotecaArtistas(){

    this.router.navigate(['/biblioteca-artistas'])
  }
  bibliotecaCrearPlaylist(){

    this.router.navigate(['/biblioteca-crear-playlist'])
  }
}
