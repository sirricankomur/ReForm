import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormCreateLayoutRoutes } from './form-create-layout.routing';
import { NavbarComponent } from '@layouts/form-create-layout/navbar/navbar.component';
import { LeftSidebarComponent } from '@layouts/form-create-layout/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from '@layouts/form-create-layout/right-sidebar/right-sidebar.component';
import { SharedModule } from '@shared/shared.module';
import { DateModule } from '@datas/components/question-types/date/date.module';
import { DataModule } from '@datas/data.module';
import { FormCreateModule } from '@modules/form-create/form-create.module';
import {ClipboardModule} from '@angular/cdk/clipboard';


@NgModule({
  declarations: [
    NavbarComponent,
    LeftSidebarComponent, 
    RightSidebarComponent
  ],
  imports: [
    CommonModule,
    FormCreateModule,
    DataModule,
    ClipboardModule,
    RouterModule.forChild(FormCreateLayoutRoutes)
  ],
  exports: [
    NavbarComponent,
    LeftSidebarComponent, 
    RightSidebarComponent,
    DataModule
  ]
})
export class FormCreateLayoutModule { }
