export class OpinionScaleQuestion {
  constructor(questionId: number, isRequired: boolean, minScale: number, maxScale: number) {
    this.questionId = questionId;
    this.isRequired = isRequired;
    this.minScale = minScale;
    this.maxScale = maxScale;
  }

  questionId: number;
  isRequired: boolean;
  minScale: number;
  maxScale: number;
  labelBeginningText: string;
  labelMiddleText: string;
  labelEndText: string;
}
