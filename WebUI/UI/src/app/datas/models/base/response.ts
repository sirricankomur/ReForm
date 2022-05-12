export class Response {
  constructor(questionId: number, formId: number, userId: number) {
    this.questionId = questionId;
    this.formId = formId;
    this.userId = userId;
  }

  id: number;
  questionId: number;
  formId: number;
  userId: number;
}
