import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg/svg.component';
import { FilterPipe } from './pipes/filter/filter.pipe';



@NgModule({
  declarations: [
    SvgComponent,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgComponent,
    FilterPipe
  ]
})
export class SharedModule { }
