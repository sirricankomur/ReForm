import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsRequiredComponent } from './is-required.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IsRequiredComponent],
  exports: [IsRequiredComponent]
})
export class IsRequiredModule { }
