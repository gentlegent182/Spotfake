import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biblioteca-buscar',
  templateUrl: './biblioteca-buscar.page.html',
  styleUrls: ['./biblioteca-buscar.page.scss'],
})
export class BibliotecaBuscarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  bibliotecaBuscar(){

    this.router.navigate(['/album'])
  }

}
