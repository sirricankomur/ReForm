export class RatingResponse {
  constructor(responseId: number, value?: number) {
    this.responseId = responseId;
    this.value = value;
  }

  responseId: number;
  value: number;
}
