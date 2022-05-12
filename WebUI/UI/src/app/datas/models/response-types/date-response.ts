export class DateResponse {
  constructor(responseId: number, value?: Date) {
    this.responseId = responseId;
    this.value = value;
  }

  responseId: number;
  value: Date;
}
