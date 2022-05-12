import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillHeaderComponent } from './fill-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FillHeaderComponent],
  exports: [
    FillHeaderComponent
  ]
})
export class FillHeaderModule { }
