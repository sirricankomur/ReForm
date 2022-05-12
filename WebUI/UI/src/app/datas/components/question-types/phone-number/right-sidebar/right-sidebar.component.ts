import { Component, OnInit } from '@angular/core';
import { Question } from '@datas/models/base/question';
import { PhoneNumberQuestion } from '@datas/models/question-types/phone-number-question';
import { PhoneNumberQuestionService } from '@datas/services/question-types/phone-number/phone-number-question.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-phone-number-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
