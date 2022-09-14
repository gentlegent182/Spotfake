import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-biblioteca-albumes',
  templateUrl: './biblioteca-albumes.page.html',
  styleUrls: ['./biblioteca-albumes.page.scss'],
})
export class BibliotecaAlbumesPage {

  constructor(private router: Router) { }
  bibliotecaAlbumes(){

    this.router.navigate(['/biblioteca-albumes'])
  }
  

}
