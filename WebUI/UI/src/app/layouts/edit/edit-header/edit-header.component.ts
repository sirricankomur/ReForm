import { Component, OnInit } from '@angular/core';
import { QuestionService } from '@datas/services/base/question/question.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.scss']
})
export class EditHeaderComponent implements OnInit {
  editedQuestion;
  form;

  constructor(
    private questionService: QuestionService,
    private localStorageService: LocalStorageService
  ) {}
  
  ngOnInit(): void {
    this.form = this.localStorageService.getEditedForm();    
  }

  getEditedQuestion(){
    return this.localStorageService.getEditedQuestion();
  }

  updateTitle(title) {
    this.editedQuestion = this.getEditedQuestion();
    this.editedQuestion.title = title.target.value;
    this.updateForm();
    this.localStorageService.setEditedQuestion(
      this.editedQuestion
    );

    this.questionService.update(this.editedQuestion).subscribe();
  }

  updateDescription(description) {
    this.editedQuestion = this.getEditedQuestion();
    this.editedQuestion.description = description.target.value;

    this.updateForm();
    this.localStorageService.setEditedQuestion(
      this.editedQuestion
    );

    this.questionService.update(this.editedQuestion).subscribe();
  }

  private updateForm() {
    for (let i = 0; i < this.form.questions.length; i++) {
      if (this.form.questions[i].id === this.editedQuestion.id) {
        this.form.questions[i] = this.editedQuestion;
        this.localStorageService.setEditedForm(this.form);
        break;
      }
    }
  }
}
