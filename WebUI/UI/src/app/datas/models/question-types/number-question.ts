export class NumberQuestion {
  constructor(questionId: number, isRequired: boolean,  isMinNumber: boolean, isMaxNumber: boolean) {
    this.questionId = questionId;
    this.isRequired = isRequired;
    this.isMinNumber = isMinNumber;
    this.isMaxNumber = isMaxNumber;
  }

  questionId: number;
  isRequired: boolean;
  isMinNumber: boolean;
  isMaxNumber: boolean;
  minNumber: number;
  maxNumber: number;
}
