import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditComponent } from './form-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormEditComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormEditComponent,
  ]
})
export class FormEditModule { }
