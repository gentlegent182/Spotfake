import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MadeforuPageRoutingModule } from './madeforu-routing.module';

import { MadeforuPage } from './madeforu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MadeforuPageRoutingModule
  ],
  declarations: [MadeforuPage]
})
export class MadeforuPageModule {}
