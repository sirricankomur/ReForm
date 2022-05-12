import { Injectable } from '@angular/core';
import { Form } from '@datas/models/base/form';
import { Question } from '@datas/models/base/question';
import { UserDto } from '@datas/models/dto/user-dto';
import { FormUser } from '@datas/models/intermediate/form-user';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setLoadedQuestion(question: Question) {
    localStorage.setItem('loadedQuestion', JSON.stringify(question));
  }

  getLoadedQuestion(): Question {
    return JSON.parse(localStorage.getItem('loadedQuestion'));
  }

  setForms(forms: Form[]) {
    localStorage.setItem('forms', JSON.stringify(forms));
  }

  getForms(): Form[] {
    return JSON.parse(localStorage.getItem('forms'));
  }

  /* Edited */
  getEditedForm(): Form {
    return JSON.parse(localStorage.getItem('editedForm'));
  }

  setEditedForm(form: Form) {
    localStorage.setItem('editedForm', JSON.stringify(form));
  }

  getEditedQuestion(): Question {
    return JSON.parse(localStorage.getItem('editedQuestion'));
  }

  setEditedQuestion(question: Question) {
    localStorage.setItem('editedQuestion', JSON.stringify(question));
  }

  getEditedQuestionSettings(): any {
    return JSON.parse(localStorage.getItem('editedQuestionSettings'));
  }

  setEditedQuestionSettings(questionSettings: any) {
    localStorage.setItem(
      'editedQuestionSettings',
      JSON.stringify(questionSettings)
    );
  }

  getEditedMultipleChoices(): any {
    return this.getEditedQuestionSettings().multipleChoiceDetails;
  }

  setEditedMultipleChoices(choices: any) {
    let editedQuestionSettings = this.getEditedQuestionSettings();
    editedQuestionSettings.multipleChoiceDetails = choices;
    this.setEditedQuestionSettings(editedQuestionSettings);
  }

  getEditedRankingChoices(): any {
    return this.getEditedQuestionSettings().rankingDetails;
  }

  setEditedRankingChoices(choices: any) {
    let editedQuestionSettings = this.getEditedQuestionSettings();
    editedQuestionSettings.rankingDetails = choices;
    this.setEditedQuestionSettings(editedQuestionSettings);
  }

  /* Filled */
  getFilledForm(): Form {
    return JSON.parse(localStorage.getItem('filledForm'));
  }

  setFilledForm(form: Form) {
    localStorage.setItem('filledForm', JSON.stringify(form));
  }

  getFilledQuestion(): Question {
    return JSON.parse(localStorage.getItem('filledQuestion'));
  }

  setFilledQuestion(question: Question) {
    localStorage.setItem('filledQuestion', JSON.stringify(question));
  }

  getNextQuestionSettings(): Question {
    return JSON.parse(localStorage.getItem('nextQuestionSettings'));
  }

  setNextQuestionSettings(question: Question) {
    localStorage.setItem('nextQuestionSettings', JSON.stringify(question));
  }

  getPrevQuestionSettings(): Question {
    return JSON.parse(localStorage.getItem('prevQuestionSettings'));
  }

  setPrevQuestionSettings(question: Question) {
    localStorage.setItem('prevQuestionSettings', JSON.stringify(question));
  }

  getFilledQuestionSettings(): any {
    return JSON.parse(localStorage.getItem('filledQuestionSettings'));
  }

  setFilledQuestionSettings(questionSettings: any) {
    localStorage.setItem(
      'filledQuestionSettings',
      JSON.stringify(questionSettings)
    );
  }

  getFilledQuestionSettingsArray(): any {
    return JSON.parse(localStorage.getItem('filledQuestionSettingsArray'));
  }

  setFilledQuestionSettingsArray(questionSettings: any) {
    localStorage.setItem(
      'filledQuestionSettingsArray',
      JSON.stringify(questionSettings)
    );
  }

  getRequiredQuestions(): any {
    return JSON.parse(localStorage.getItem('requiredQuestions'));
  }

  setRequiredQuestions(questionSettings: any) {
    localStorage.setItem('requiredQuestions', JSON.stringify(questionSettings));
  }

  getResponses(): any {
    return JSON.parse(localStorage.getItem('responses'));
  }

  setResponses(responses: any) {
    localStorage.setItem('responses', JSON.stringify(responses));
  }

  getFormResponses(): any {
    return JSON.parse(localStorage.getItem('formResponses'));
  }

  setFormResponses(responses: any) {
    localStorage.setItem('formResponses', JSON.stringify(responses));
  }

  getResponse(): any {
    return JSON.parse(localStorage.getItem('response'));
  }

  setResponse(response: any) {
    localStorage.setItem('response', JSON.stringify(response));
  }

  getFilledMultipleChoices(): any {
    return this.getFilledQuestionSettings().multipleChoiceDetails;
  }

  setFilledMultipleChoices(choices: any) {
    let filledQuestionSettings = this.getFilledQuestionSettings();
    filledQuestionSettings.multipleChoiceDetails = choices;
    this.setFilledQuestionSettings(filledQuestionSettings);
  }

  getFilledRankingChoices(): any {
    return this.getFilledQuestionSettings().rankingDetails;
  }

  setFilledRankingChoices(choices: any) {
    let filledQuestionSettings = this.getFilledQuestionSettings();
    filledQuestionSettings.rankingDetails = choices;
    this.setFilledQuestionSettings(filledQuestionSettings);
  }

  getFilledRankingInitialChoices(): any {
    return JSON.parse(localStorage.getItem('initial'));
  }

  setFilledRankingInitialChoices(choices: any) {
    localStorage.setItem('initial', JSON.stringify(choices));
  }

  getFormAction(): string {
    return localStorage.getItem('formAction');
  }

  setFormAction(action: string) {
    return localStorage.setItem('formAction', action);
  }

  getUser(): UserDto {
    return JSON.parse(localStorage.getItem('user'));
  }

  setUser(user: UserDto) {
    return localStorage.setItem('user', JSON.stringify(user));
  }

  getEditedUser(): UserDto {
    return JSON.parse(localStorage.getItem('editedUser'));
  }

  setEditedUser(user: UserDto) {
    return localStorage.setItem('editedUser', JSON.stringify(user));
  }

  getFormUsers(): FormUser[] {
    return JSON.parse(localStorage.getItem('formUsers'));
  }

  setFormUsers(formUser: FormUser[]) {
    return localStorage.setItem('formUsers', JSON.stringify(formUser));
  }

  getReload(): string {
    return localStorage.getItem('reload');
  }

  setReload(value: string) {
    localStorage.setItem('reload', value);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getRate(): number {
    return Number(localStorage.getItem('rate'));
  }

  setRate(number: number) {
    localStorage.setItem('rate', number.toString());
  }
}
