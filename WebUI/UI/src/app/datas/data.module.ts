import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { QuestionTypesModule } from './components/question-types/question-types.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    QuestionTypesModule,
  ]
   
})
export class DataModule { }
