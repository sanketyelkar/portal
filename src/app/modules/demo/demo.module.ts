import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './page/demo/demo.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
    
  ]
})
export class DemoModule {}
