import { Component, OnInit } from '@angular/core';
import { WebsiteQuestion } from '@datas/models/question-types/website-question';
import { WebsiteQuestionService } from '@datas/services/question-types/website/website-question.service';

@Component({
  selector: 'app-website-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
