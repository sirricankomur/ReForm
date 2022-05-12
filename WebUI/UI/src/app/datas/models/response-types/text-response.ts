export class TextResponse {
  constructor(responseId: number, value?: string) {
    this.responseId = responseId;
    this.value = value;
  }

  responseId: number;
  value: string;
}
