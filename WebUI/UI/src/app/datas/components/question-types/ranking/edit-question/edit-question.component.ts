import { Component, OnInit } from '@angular/core';
import { Question } from '@datas/models/base/question';
import { RankingQuestion } from '@datas/models/question-types/ranking-question';
import { RankingDetail } from '@datas/models/details/ranking-detail';
import { RankingDetailService } from '@datas/services/question-types/ranking/ranking-detail.service';
import { RankingQuestionService } from '@datas/services/question-types/ranking/ranking-question.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';
import { RankingChoiceSortService } from '@shared/services/ranking-choice-sort/ranking-choice-sort.service';

@Component({
  selector: 'app-edit-ranking-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss'],
})
export class EditQuestionComponent implements OnInit {
  private editedQuestion: Question;
  private editedQuestionSettings: RankingQuestion;
  choices;

  constructor(
    private rankingQuestionService: RankingQuestionService,
    private rankingDetailService: RankingDetailService,
    private rankingChoiceSortService: RankingChoiceSortService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.editedQuestion = this.localStorageService.getEditedQuestion();
    this.setEditedQuestionSettings(this.editedQuestion);
  }

  private setEditedQuestionSettings(question: Question) {
    this.rankingQuestionService.getById(question.id).subscribe((response) => {
      this.editedQuestionSettings = response.data;
      this.choices = this.rankingChoiceSortService.sort(
        this.editedQuestionSettings.rankingDetails
      );
      this.localStorageService.setEditedQuestionSettings(
        this.editedQuestionSettings
      );
      this.localStorageService.setEditedRankingChoices(this.choices);
    });
  }

  reorder(choiceId, targetRank) {
    this.rankingChoiceSortService.reorder(choiceId, targetRank, this.choices);
    this.choices = this.rankingChoiceSortService.sort(this.choices);
    this.editedQuestionSettings.rankingDetails = this.choices;
    this.localStorageService.setEditedRankingChoices(this.choices);
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
  }

  delete(choiceId) {
    choiceId = Number(choiceId);
    this.choices = this.localStorageService.getEditedRankingChoices();
    this.rankingDetailService
      .getById(choiceId)
      .subscribe((responseRankingDetail) => {
        this.rankingDetailService
          .delete(responseRankingDetail.data)
          .subscribe(() => {
            this.rankingChoiceSortService.reorderAfterDeleted(
              choiceId,
              responseRankingDetail.data.rank,
              this.choices
            );
            this.choices = this.rankingChoiceSortService.sort(this.choices);
            this.localStorageService.setEditedRankingChoices(this.choices);
          });
      });
  }

  addChoice(questionId) {
    this.rankingQuestionService.getById(questionId).subscribe((response) => {
      let rank = response.data.rankingDetails.length + 1;
      let rankingDetail = new RankingDetail(Number(questionId), rank, '...');
      this.create(questionId, rankingDetail);
    });
  }

  private create(questionId, rankingDetail) {
    this.rankingDetailService.create(rankingDetail).subscribe(() => {
      this.rankingDetailService
        .getRankingChoices(Number(questionId))
        .subscribe((response) => {
          this.choices = response.data;
          this.localStorageService.setEditedRankingChoices(this.choices);
        });
    });
  }

  updateChoiceTitle(rankingDetailId, title) {
    let index;
    for (let i = 0; i < this.choices.length; i++) {
      if (this.choices[i].rankingDetailId == rankingDetailId) {
        index = i + 1;
        break;
      }
    }
    this.choices = this.localStorageService.getEditedRankingChoices();
    let choiceTitle = title.target.value;

    let rankingDetail = this.choices[index - 1];
    rankingDetail.title = choiceTitle;
    this.choices[index - 1].title = choiceTitle;

    this.localStorageService.setEditedRankingChoices(this.choices);
    this.rankingDetailService.update(rankingDetail).subscribe();
  }

  getChoices() {
    return this.localStorageService.getEditedRankingChoices();
  }

  getEditedQuestion() {
    return this.localStorageService.getEditedQuestion();
  }
}
