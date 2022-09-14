import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaCrearPlaylistPageRoutingModule } from './biblioteca-crear-playlist-routing.module';

import { BibliotecaCrearPlaylistPage } from './biblioteca-crear-playlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaCrearPlaylistPageRoutingModule
  ],
  declarations: [BibliotecaCrearPlaylistPage]
})
export class BibliotecaCrearPlaylistPageModule {}
