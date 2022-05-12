export class UserResponse {
  constructor(userId: number, responseId: number, isComplete: boolean) {
    this.userId = userId;
    this.responseId = responseId;
    this.isComplete = isComplete;
  }
  id: number;
  userId: number;
  responseId: number;
  isComplete: boolean;
}
