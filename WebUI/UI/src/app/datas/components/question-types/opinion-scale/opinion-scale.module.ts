import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { FillQuestionComponent } from './fill-question/fill-question.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditLeftSidebarModule } from '@layouts/edit/edit-left-sidebar/edit-left-sidebar.module';
import { EditHeaderModule } from '@layouts/edit/edit-header/edit-header.module';
import { IsRequiredModule } from '@layouts/edit/edit-right-sidebar/is-required/is-required.module';
import { FillHeaderModule } from '@layouts/fill/fill-header/fill-header.module';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [
    EditQuestionComponent,
    FillQuestionComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditHeaderModule,
    EditLeftSidebarModule,
    IsRequiredModule,
    FillHeaderModule
  ],
  exports: [
    EditQuestionComponent,
    FillQuestionComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    ResultComponent
  ]
})
export class OpinionScaleModule { }
