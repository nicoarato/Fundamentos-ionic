import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentsPageRoutingModule } from './segments-routing.module';

import { SegmentsPage } from './segments.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentsPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [SegmentsPage]
})
export class SegmentsPageModule {}
