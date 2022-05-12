export class MultipleChoiceDetail {
  constructor(
    multipleChoiceQuestionId: number,
    choiceOrder: number,
    title: string,
    isOtherOption: boolean
  ) {
    this.multipleChoiceQuestionId = multipleChoiceQuestionId;
    this.choiceOrder = choiceOrder;
    this.title = title;
    this.isOtherOption = isOtherOption;
  }

  multipleChoiceDetailId: number;
  multipleChoiceQuestionId: number;
  choiceOrder: number;
  title: string;
  isOtherOption: boolean;
}
