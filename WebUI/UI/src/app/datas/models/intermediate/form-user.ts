export class FormUser {
  constructor(formId: number, userId: number) {
    this.formId = formId;
    this.userId = userId;
  }
  
  id: number;
  formId: number;
  userId: number;
}
