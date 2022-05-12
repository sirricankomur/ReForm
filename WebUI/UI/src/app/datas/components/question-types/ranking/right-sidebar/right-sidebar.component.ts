import { Component, OnInit } from '@angular/core';
import { Question } from '@datas/models/base/question';
import { RankingQuestion } from '@datas/models/question-types/ranking-question';
import { RankingDetailService } from '@datas/services/question-types/ranking/ranking-detail.service';
import { RankingQuestionService } from '@datas/services/question-types/ranking/ranking-question.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { RankingChoiceSortService } from '@shared/services/ranking-choice-sort/ranking-choice-sort.service';

@Component({
  selector: 'app-ranking-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
