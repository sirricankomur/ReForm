import { Injectable } from '@angular/core';
import { QuestionService } from '@datas/services/base/question/question.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class EditHeaderService {
  form;
  editedQuestion;

  constructor(
    private questionService: QuestionService,
    private localStorageService: LocalStorageService
  ) {}

  updateTitle(title) {
    this.editedQuestion.title = title.target.value;
    this.updateForm();
    this.localStorageService.setEditedQuestion(this.editedQuestion);

    this.questionService.update(this.editedQuestion).subscribe();
  }

  updateDescription(description) {
    this.editedQuestion.description = description.target.value;

    this.updateForm();
    this.localStorageService.setEditedQuestion(this.editedQuestion);

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
