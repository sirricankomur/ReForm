export class MultipleChoiceQuestion {
  constructor(
    questionId: number,
    isRequired: boolean,
    isMultipleSelection: boolean,
    isOtherOption: boolean,
    isMultipleSelectionUnlimited: boolean,
    isMultipleSelectionExactNumber: boolean,
    isMultipleSelectionRange: boolean
  ) {
    this.questionId = questionId;
    this.isRequired = isRequired;
    this.isMultipleSelection = isMultipleSelection;
    this.isOtherOption = isOtherOption;
    this.isMultipleSelectionUnlimited = isMultipleSelectionUnlimited;
    this.isMultipleSelectionExactNumber = isMultipleSelectionExactNumber;
    this.isMultipleSelectionRange = isMultipleSelectionRange;
  }

  questionId: number;
  isRequired: boolean;
  isMultipleSelection: boolean;
  isOtherOption: boolean;
  isMultipleSelectionUnlimited: boolean;
  isMultipleSelectionExactNumber: boolean;
  isMultipleSelectionRange: boolean;
  multipleSelectionExactNumber: number;
  multipleSelectionMinRange: number;
  multipleSelectionMaxRange: number;
  multipleChoiceDetails: [];
}
