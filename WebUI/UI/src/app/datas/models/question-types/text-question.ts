export class TextQuestion {
  constructor(questionId: number, isRequired: boolean, isMaxCharacters: boolean
    ) {
    this.questionId = questionId;
    this.isRequired = isRequired;
    this.isMaxCharacters = isMaxCharacters;
  }

  questionId: number;
  isRequired: boolean;
  isMaxCharacters: boolean;
  maxCharacters: number;
}
