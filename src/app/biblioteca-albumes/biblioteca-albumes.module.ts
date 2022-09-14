import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaAlbumesPageRoutingModule } from './biblioteca-albumes-routing.module';

import { BibliotecaAlbumesPage } from './biblioteca-albumes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaAlbumesPageRoutingModule
  ],
  declarations: [BibliotecaAlbumesPage]
})
export class BibliotecaAlbumesPageModule {}
