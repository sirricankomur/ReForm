export class PhoneNumberQuestion {
  constructor(questionId: number, isRequired: boolean) {
    this.questionId = questionId;
    this.isRequired = isRequired;
  }

  questionId: number;
  isRequired: boolean;
}
