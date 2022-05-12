export class RankingResponse {
  constructor(responseId: number, value) {
    this.responseId = responseId;
    this.value = value;
  }

  responseId: number;
  value;
}
