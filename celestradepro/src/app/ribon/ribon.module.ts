import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RibonPageRoutingModule } from './ribon-routing.module';

import { RibonPage } from './ribon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RibonPageRoutingModule
  ],
  declarations: [RibonPage]
})
export class RibonPageModule {}
