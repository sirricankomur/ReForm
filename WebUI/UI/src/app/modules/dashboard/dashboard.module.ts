import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from '@modules/users/users.component';
import { UsersModule } from '@modules/users/users.module';


@NgModule({
  imports: [
    CommonModule,
    UsersModule
  ],
  declarations: [DashboardComponent],
  exports: []
})
export class DashboardModule { }
