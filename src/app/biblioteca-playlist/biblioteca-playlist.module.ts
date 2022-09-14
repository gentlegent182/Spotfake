import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaPlaylistPageRoutingModule } from './biblioteca-playlist-routing.module';

import { BibliotecaPlaylistPage } from './biblioteca-playlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaPlaylistPageRoutingModule
  ],
  declarations: [BibliotecaPlaylistPage]
})
export class BibliotecaPlaylistPageModule {}
