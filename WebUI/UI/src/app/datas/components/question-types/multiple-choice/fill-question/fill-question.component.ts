import { Component, OnInit } from '@angular/core';
import { Question } from '@datas/models/base/question';
import { MultipleChoiceQuestion } from '@datas/models/question-types/multiple-choice-question';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { SubmitService } from '@datas/services/submit/submit.service';

@Component({
  selector: 'app-fill-multiple-choice-question',
  templateUrl: './fill-question.component.html',
  styleUrls: ['./fill-question.component.scss'],
})
export class FillQuestionComponent implements OnInit {
  filledQuestion: Question;
  filledQuestionSettings: MultipleChoiceQuestion;
  requiredQuestionArray;
  filledQuestionSettingsArray;
  multipleChoice: any = null;
  selectedChoice: any = [];
  response: any;
  responses: any = [];

  constructor(
    private localStorageService: LocalStorageService,
    private submitService: SubmitService
  ) {}

  ngOnInit(): void {
    this.selectedChoice = new Array();
    this.responses = this.localStorageService.getResponses();
    this.filledQuestion = this.localStorageService.getFilledQuestion();
    this.filledQuestionSettings =
      this.localStorageService.getFilledQuestionSettings();
    this.response = this.getResponse();
    if (this.response) {
      this.setResponse(this.response.value);
      this.selectedChoice = this.response.value;
    } else {
      this.setResponse(this.selectedChoice);
    }
  }

  reset() {
    this.multipleChoice = null;
    this.ngOnInit();
  }

  select(choice) {
    this.multipleChoice = choice;
    let isThere = false;
    for (let i = 0; i < this.selectedChoice.length; i++) {
      if (this.selectedChoice[i] == this.multipleChoice) {
        isThere = true;
      }
    }

    return isThere;
  }

  setChoice(choice) {
    console.log("choice: ", choice)
    this.multipleChoice = choice;
    const index = this.selectedChoice.indexOf(choice, 0);

    for (let i = 0; i < this.selectedChoice.length; i++) {
      if (index > -1) {
        this.selectedChoice.splice(index, 1);
        this.setResponse(this.selectedChoice);
        return;
      }
    }

    this.setChoices(choice);
  }

  setChoices(choice: any) {
    if (this.localStorageService.getFilledQuestionSettings().isRequired) {
      if (
        this.localStorageService.getFilledQuestionSettings().isMultipleSelection
      ) {
        if (
          this.localStorageService.getFilledQuestionSettings()
            .isMultipleSelectionUnlimited
        ) {
          this.selectedChoice.push(choice);
        } else if (
          this.localStorageService.getFilledQuestionSettings()
            .isMultipleSelectionExactNumber
        ) {
          if (
            this.selectedChoice.length <
            this.localStorageService.getFilledQuestionSettings()
              .multipleSelectionExactNumber
          ) {
            this.selectedChoice.push(choice);
          }
        } else if (
          this.localStorageService.getFilledQuestionSettings()
            .isMultipleSelectionRange
        ) {
          if (
            this.selectedChoice.length <
            this.localStorageService.getFilledQuestionSettings()
              .multipleSelectionMaxRange
          ) {
            this.selectedChoice.push(choice);
          }
        }
      } else {
        if (this.selectedChoice.length < 1) {
          this.selectedChoice.push(choice);
        }
      }
    } else {
      if (
        this.localStorageService.getFilledQuestionSettings().isMultipleSelection
      ) {
        if (
          this.localStorageService.getFilledQuestionSettings()
            .isMultipleSelectionUnlimited
        ) {
          this.selectedChoice.push(choice);
        } else if (
          this.localStorageService.getFilledQuestionSettings()
            .isMultipleSelectionExactNumber
        ) {
          if (
            this.selectedChoice.length <
            this.localStorageService.getFilledQuestionSettings()
              .multipleSelectionExactNumber
          ) {
            this.selectedChoice.push(choice);
          }
        } else if (
          this.localStorageService.getFilledQuestionSettings()
            .isMultipleSelectionRange
        ) {
          if (
            this.selectedChoice.length <
            this.localStorageService.getFilledQuestionSettings()
              .multipleSelectionMaxRange
          ) {
            this.selectedChoice.push(choice);
          }
        }
      } else {
        if (this.selectedChoice.length < 1) {
          this.selectedChoice.push(choice);
        }
      }
    }
    this.setResponse(this.selectedChoice);
  }

  setResponse(value) {
    let isComplete = false;
    let isThere = false;

    if (value) {
      if (this.isValid()) {
        isComplete = true;
      }
    } else {
      if (!this.filledQuestionSettings.isRequired) {
        isComplete = true;
      }
    }

    for (let i = 0; i < this.responses.length; i++) {
      if (this.filledQuestion.id == this.responses[i].question.id) {
        this.responses[i].value = value;
        this.responses[i].isComplete = isComplete;
        isThere = true;
        break;
      }
    }
    if (!isThere) {
      this.response = {
        question: this.filledQuestion,
        questionSettings: this.filledQuestionSettings,
        value: value,
        isComplete: isComplete,
      };
      this.responses.push(this.response);
    }

    this.localStorageService.setResponses(this.responses);
  }

  getResponse() {
    for (let i = 0; i < this.responses.length; i++) {
      if (this.filledQuestion.id == this.responses[i].question.id) {
        this.response = this.responses[i];
        return this.response;
      }
    }

    this.response = null;
    return this.response;
  }

  isRequired() {
    return this.localStorageService.getFilledQuestionSettings().isRequired;
  }

  isValid() {
    let valid = false;

    if (this.localStorageService.getFilledQuestionSettings().isRequired) {
      if (this.isMultipleSelection()) {
        if (
          this.isMultipleSelectionUnlimited() &&
          this.selectedChoice.length >= 1
        ) {
          valid = true;
        } else if (this.isMultipleSelectionExactNumber()) {
          valid = true;
        } else if (this.isMultipleSelectionRange()) {
          valid = true;
        }
      } else {
        if (this.selectedChoice.length == 1) {
          valid = true;
        }
      }
    } else {
      if (this.isMultipleSelection()) {
        if (this.isMultipleSelectionUnlimited()) {
          valid = true;
        } else if (this.isMultipleSelectionExactNumber()) {
          valid = true;
        } else if (this.isMultipleSelectionRange()) {
          valid = true;
        }
      } else {
        if (this.selectedChoice.length == 1) {
          valid = true;
        }
      }
    }
    return valid;
  }

  isMultipleSelection() {
    return this.localStorageService.getFilledQuestionSettings()
      .isMultipleSelection;
  }

  isMultipleSelectionUnlimited() {
    return this.localStorageService.getFilledQuestionSettings()
      .isMultipleSelectionUnlimited;
  }

  isMultipleSelectionExactNumber() {
    let valid = false;

    if (
      this.localStorageService.getFilledQuestionSettings()
        .isMultipleSelectionExactNumber
    ) {
      if (
        this.selectedChoice.length ==
        this.localStorageService.getFilledQuestionSettings()
          .multipleSelectionExactNumber
      ) {
        valid = true;
      }
    }
    return valid;
  }

  isMultipleSelectionRange() {
    let valid = false;
    if (
      this.localStorageService.getFilledQuestionSettings()
        .isMultipleSelectionRange
    ) {
      if (
        this.selectedChoice.length >=
          this.localStorageService.getFilledQuestionSettings()
            .multipleSelectionMinRange &&
        this.selectedChoice.length <=
          this.localStorageService.getFilledQuestionSettings()
            .multipleSelectionMaxRange
      ) {
        valid = true;
      }
    }

    return valid;
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

  getFilledQuestion() {
    return this.localStorageService.getFilledQuestion();
  }

  getChoices() {
    return this.localStorageService.getFilledMultipleChoices();
  }

  getIsOtherOption() {
    return this.localStorageService.getFilledQuestionSettings().isOtherOption;
  }

  getIsMultipleSelection() {
    return this.localStorageService.getFilledQuestionSettings()
      .isMultipleSelection;
  }

  getIsMultipleSelectionUnlimited() {
    return this.localStorageService.getFilledQuestionSettings()
      .isMultipleSelectionUnlimited;
  }

  getIsMultipleSelectionExactNumber() {
    return this.localStorageService.getFilledQuestionSettings()
      .isMultipleSelectionExactNumber;
  }

  getIsMultipleSelectionRange() {
    return this.localStorageService.getFilledQuestionSettings()
      .isMultipleSelectionRange;
  }

  getMultipleSelectionExactNumber() {
    return this.localStorageService.getFilledQuestionSettings()
      .multipleSelectionExactNumber;
  }

  getMultipleSelectionMaxRange() {
    return this.localStorageService.getFilledQuestionSettings()
      .multipleSelectionMaxRange;
  }

  getMultipleSelectionMinRange() {
    return this.localStorageService.getFilledQuestionSettings()
      .multipleSelectionMinRange;
  }

  isSelected(m) {
    for (let i = 0; i < this.selectedChoice.length; i++) {
      if (m - 1 == this.selectedChoice[i]) {
        return true;
      }
    }

    return false;
  }

  isSameQuestion() {
    if (
      this.filledQuestionSettings.questionId !=
      this.localStorageService.getFilledQuestionSettings().questionId
    ) {
      this.ngOnInit();
    }

    return true;
  }

  isLastQuestion() {
    return (
      this.filledQuestion.questionOrder ==
      this.localStorageService.getFilledForm().questions.length
    );
  }

  submit() {
    this.submitService.submitResponse(this.responses);
  }
}
