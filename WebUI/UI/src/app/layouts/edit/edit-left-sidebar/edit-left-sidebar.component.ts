import { Component, OnInit } from '@angular/core';
import { Form } from '@datas/models/base/form';
import { Question } from '@datas/models/base/question';
import { QuestionService } from '@datas/services/base/question/question.service';
import { ResponseService } from '@datas/services/base/response/response.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { QuestionSettingsService } from '@shared/services/question-settings/question-settings.service';
import { QuestionSortService } from '@shared/services/question-sort/question-sort.service';
import { QuestionTypesValidationService } from '@shared/services/validations/question-types-validation/question-types-validation.service';

@Component({
  selector: 'app-edit-left-sidebar',
  templateUrl: './edit-left-sidebar.component.html',
  styleUrls: ['./edit-left-sidebar.component.scss'],
})
export class EditLeftSidebarComponent implements OnInit {
  form: Form;
  questions: Question[];
  loadedQuestion: Question;
  editedQuestion: Question;

  constructor(
    private questionService: QuestionService,
    private questionSortService: QuestionSortService,
    private localStorageService: LocalStorageService,
    private questionSettingsService: QuestionSettingsService,
    private responseService: ResponseService,
    public questionTypesValidationService: QuestionTypesValidationService
  ) {}

  ngOnInit(): void {
    this.form = this.localStorageService.getEditedForm();
    this.questions = this.form.questions;
    this.loadedQuestion = this.localStorageService.getLoadedQuestion();
    this.editedQuestion = this.localStorageService.getEditedQuestion();
  }

  isEditedQuestion(loadedQuestion: Question, editedQuestion: Question) {
    return loadedQuestion.id === editedQuestion.id;
  }

  reorder(question: Question, targetOrder) {
    this.questionSortService.reorder(question.id, targetOrder, this.questions);
    this.questions = this.questionSortService.sort(this.questions);
    this.form.questions = this.questions;
    this.localStorageService.setEditedForm(this.form);

    this.setEditedQuestion(question);
  }

  click(question: Question) {
    this.questionSettingsService.setQuestionSettings(question, this.localStorageService.setEditedQuestionSettings);
    this.setEditedQuestion(question);
  }

  delete(question: Question) {
    this.form = this.localStorageService.getEditedForm();
    console.log("this.form DB: ", this.form)

    this.questionService.getById(question.id).subscribe((responseQuestion) => {
      this.questionService.delete(responseQuestion.data).subscribe(() => {
        this.questionSortService.reorderAfterDeleted(
          question.id,
          responseQuestion.data.questionOrder,
          this.questions
        );
        console.log("responseQuestion DB: ", responseQuestion.data)

        this.questions = this.questionSortService.sort(this.questions);
        this.form.questions = this.questions;

        for (let i = 0; i < this.form.responses.length; i++) {
          
            if (this.form.responses[i].questionId == question.id) {
              console.log(this.form.responses[i])
              this.form.responses.splice(i, 1);
              i--;
              continue;
            }
          }
          this.localStorageService.setEditedForm(this.form);
        });
        
        

        // this.responseService.getAllByFormId(this.form.id).subscribe((responseDb) => {
        //   this.form.responses = responseDb.data;
        //   console.log("RESPONSE DB: ", responseDb.data)
        // this.localStorageService.setEditedForm(this.form);
        // })
      
    });
  }

  setEditedQuestion(question: Question) {
    this.questionService.getById(question.id).subscribe((response) => {
      this.localStorageService.setEditedQuestion(response.data);
    });
  }
}
