import { Component, OnInit } from '@angular/core';
import { Question } from '@datas/models/base/question';
import { MultipleChoiceDetail } from '@datas/models/details/multiple-choice-detail';
import { MultipleChoiceQuestion } from '@datas/models/question-types/multiple-choice-question';
import { MultipleChoiceDetailService } from '@datas/services/question-types/multiple-choice/multiple-choice-detail.service';
import { MultipleChoiceQuestionService } from '@datas/services/question-types/multiple-choice/multiple-choice-question.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { MultipleChoiceSortService } from '@shared/services/multiple-choice-sort/multiple-choice-sort.service';

@Component({
  selector: 'app-edit-multiple-choice-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss'],
})
export class EditQuestionComponent implements OnInit {
  private editedQuestion: Question;
  private editedQuestionSettings: MultipleChoiceQuestion;
  private choices;

  constructor(
    private multipleChoiceQuestionService: MultipleChoiceQuestionService,
    private multipleChoiceDetailService: MultipleChoiceDetailService,
    private multipleChoiceSortService: MultipleChoiceSortService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.editedQuestion = this.localStorageService.getEditedQuestion();
    this.setEditedQuestionSettings(this.editedQuestion);
  }

  private setEditedQuestionSettings(question: Question) {
    this.multipleChoiceQuestionService
      .getById(question.id)
      .subscribe((response) => {
        this.editedQuestionSettings = response.data;
        this.choices = this.editedQuestionSettings.multipleChoiceDetails;
        this.localStorageService.setEditedQuestionSettings(
          this.editedQuestionSettings
        );
        this.localStorageService.setEditedMultipleChoices(this.choices);
      });
  }

  addChoice(questionId) {
    this.multipleChoiceQuestionService
      .getById(questionId)
      .subscribe((response) => {
        let choiceOrder = response.data.multipleChoiceDetails.length;
        
        let multipleChoiceDetail = new MultipleChoiceDetail(
          Number(questionId),
          choiceOrder,
          '...',
          false
        );

        this.create(questionId, multipleChoiceDetail); 
      });
  }

  private create(questionId, multipleChoiceDetail) {
    this.multipleChoiceDetailService
      .create(multipleChoiceDetail)
      .subscribe(() => {
        this.multipleChoiceDetailService
          .getMultipleChoices(Number(questionId))
          .subscribe((response) => {
            this.choices = response.data;
            this.localStorageService.setEditedMultipleChoices(this.choices);
          });
      });
  }

  delete(choiceId) {
    choiceId = Number(choiceId);
    this.choices = this.localStorageService.getEditedMultipleChoices();

    this.multipleChoiceDetailService
      .getById(choiceId)
      .subscribe((responseMultipleChoiceDetail) => {
        this.multipleChoiceDetailService
          .delete(responseMultipleChoiceDetail.data)
          .subscribe(() => {
            this.multipleChoiceSortService.reorderAfterDeleted(
              choiceId,
              responseMultipleChoiceDetail.data.choiceOrder,
              this.choices
            );
          });
      });
  }

  updateChoiceTitle(multipleChoiceDetailId, title) {
    let index;
    for (let i = 0; i < this.choices.length; i++) {
      if (this.choices[i].multipleChoiceDetailId == multipleChoiceDetailId) {
        index = i + 1;
        break;
      }
    }

    this.choices = this.localStorageService.getEditedMultipleChoices();
    let choiceTitle = title.target.value;

    let multipleChoiceDetail = this.choices[index - 1];
    multipleChoiceDetail.title = choiceTitle;
    this.choices[index - 1].title = choiceTitle;

    this.localStorageService.setEditedMultipleChoices(this.choices);
    this.multipleChoiceDetailService.update(multipleChoiceDetail).subscribe();
  }

  getLetter(choiceOrder) {
    let firstNumber = choiceOrder / 26;
    let secondNumber = choiceOrder % 26;

    let choiceLetter;
    let firstLetter;
    let secondLetter;

    if (firstNumber <= 1) {
      if (secondNumber == 0) {
        secondNumber = 26;
      }
      firstLetter = String.fromCharCode(secondNumber + 64);
      choiceLetter = firstLetter;
    } else {
      firstLetter = String.fromCharCode(firstNumber + 64);
      secondLetter = String.fromCharCode(secondNumber + 64);
      choiceLetter = firstLetter + secondLetter;
    }
    return choiceLetter;
  }

  getOtherLetter() {
    let otherOrder = this.getChoices().length;
    let firstNumber = otherOrder / 26;
    let secondNumber = otherOrder % 26;

    let choiceLetter;
    let firstLetter;
    let secondLetter;

    if (firstNumber <= 1) {
      if (secondNumber == 0) {
        secondNumber = 26;
      }
      firstLetter = String.fromCharCode(secondNumber + 64);

      choiceLetter = firstLetter;
    } else {
      firstLetter = String.fromCharCode(firstNumber + 64);
      secondLetter = String.fromCharCode(secondNumber + 64);
      choiceLetter = firstLetter + secondLetter;
    }
    return choiceLetter;
  }

  getEditedQuestion() {
    return this.localStorageService.getEditedQuestion();
  }

  getChoices() {
    return this.localStorageService.getEditedMultipleChoices();
  }

  getIsOtherOption() {
    return this.localStorageService.getEditedQuestionSettings().isOtherOption;
  }
}
