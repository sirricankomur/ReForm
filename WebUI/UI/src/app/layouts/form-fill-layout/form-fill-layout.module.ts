import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormFillLayoutRoutes } from './form-fill-layout.routing';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(FormFillLayoutRoutes)

  ]
})
export class FormFillLayoutModule { }
