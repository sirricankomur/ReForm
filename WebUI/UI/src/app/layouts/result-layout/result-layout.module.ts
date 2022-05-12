import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultLayoutRoutes } from './result-layout.routing';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';
import { DataModule } from '@datas/data.module';
import { ShareModule } from '@modules/share/share.module';



@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    ShareModule,
    CommonModule,
    DataModule,
    FormsModule,
    ClipboardModule,
    RouterModule.forChild(ResultLayoutRoutes),
  ], exports: [
    NavbarComponent
  ]
})
export class ResultLayoutModule { }
