import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '@shared/pipes/filter/filter.pipe';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    
    ]
})
export class WorkspaceModule { }
