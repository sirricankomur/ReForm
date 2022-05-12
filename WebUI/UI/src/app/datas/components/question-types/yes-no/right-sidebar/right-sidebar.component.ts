import { Component, OnInit } from '@angular/core';
import { YesNoQuestion } from '@datas/models/question-types/yes-no-question';
import { YesNoQuestionService } from '@datas/services/question-types/yes-no/yes-no-question.service';

@Component({
  selector: 'app-yes-no-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
