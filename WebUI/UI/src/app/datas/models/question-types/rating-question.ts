export class RatingQuestion {
  constructor(questionId: number, isRequired: boolean, rate: number) {
    this.questionId = questionId;
    this.isRequired = isRequired;
    this.rate = rate;
  }

  questionId: number;
  isRequired: boolean;
  rate: number;
}
