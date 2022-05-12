import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewUserComponent } from './create-new-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateNewUserComponent],
  exports: [
    CreateNewUserComponent
  ]
})
export class CreateNewUserModule { }
