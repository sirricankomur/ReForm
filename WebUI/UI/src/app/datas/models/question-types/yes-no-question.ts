export class YesNoQuestion {
  constructor(questionId: number, isRequired: boolean) {
    this.questionId = questionId;
    this.isRequired = isRequired;
  }

  questionId: number;
  isRequired: boolean;
}
