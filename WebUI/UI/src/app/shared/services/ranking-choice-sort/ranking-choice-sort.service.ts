import { Injectable } from '@angular/core';
import { RankingDetailService } from '@datas/services/question-types/ranking/ranking-detail.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class RankingChoiceSortService {
  constructor(
    private rankingDetailService: RankingDetailService,
    private localStorageService: LocalStorageService
  ) {}

  sort(choices) {
    let choiceRankArray = new Array();
    let choiceNewArray = new Array();

    for (let index = 0; index < choices.length; index++) {
      choiceRankArray.push(choices[index].rank);
    }

    choiceRankArray.sort(function (a, b) {
      return a - b;
    });
    for (let i = 0; i < choices.length; i++) {
      for (let j = 0; j < choices.length; j++) {
        if (Number(choiceRankArray[i]) === choices[j].rank) {
          choiceNewArray[i] = choices[j];
        }
      }
    }

    return choiceNewArray;
  }

  reorder(choiceId, targetRank, choices, isUpdate = true) {
    targetRank = Number(targetRank);
    choiceId = Number(choiceId);

    let choiceFirstRank;
    let isComplete = false;
    let isRise = false;
    let isFall = false;
    let isChanged = true;
    let isFirst = false;
    let isMiddle = false;
    let isEnd = false;
    let first;

    for (let i = 0; i < targetRank; i++) {
      if (!isComplete || !isChanged) {
        for (let j = 0; j < choices.length; j++) {
          if (choices[j].rankingDetailId === Number(choiceId)) {
            if (targetRank > choices[j].rank) {
              isRise = true;
            } else if (targetRank < choices[j].rank) {
              isFall = true;
            } else {
              isChanged = false;
              break;
            }

            if (choices[j].rank == 1) {
              isFirst = true;
            } else if (choices[j].rank == choices.length) {
              isEnd = true;
            } else {
              isMiddle = true;
            }
            let a = choices[j];
            choiceFirstRank = choices[j].rank;
            choices[j].rank = targetRank;
            if (isUpdate) {
              this.rankingDetailService.update(choices[j]).subscribe();
            }
            isComplete = true;
            break;
          }
        }
      }
    }

    for (let k = 0; k < choices.length; k++) {
      if (choices[k].rankingDetailId == choiceId) {
        continue;
      }
      if (isFirst) {
        if (choices[k].rank <= targetRank) {
          choices[k].rank = choices[k].rank - 1;
        } else {
          continue;
        }
      } else if (isEnd) {
        if (choices[k].rank >= targetRank) {
          choices[k].rank = choices[k].rank + 1;
        } else {
          continue;
        }
      } else if (isMiddle) {
        if (isRise) {
          if (choices[k].rank <= targetRank) {
            if (choices[k].rank < choiceFirstRank) {
              continue;
            } else {
              choices[k].rank = choices[k].rank - 1;
            }
          } else {
            continue;
          }
        } else if (isFall) {
          if (choices[k].rank >= targetRank) {
            if (choices[k].rank > choiceFirstRank) {
              continue;
            } else {
              choices[k].rank = choices[k].rank + 1;
            }
          } else {
            continue;
          }
        }
      }
      if (isUpdate) {
        this.rankingDetailService.update(choices[k]).subscribe();
      }
    }

    isComplete = false;
  }

  reorderAfterDeleted(deletedChoiceId, deletedChoiceRank, choices) {
    let first;
    for (let i = 0; i < choices.length; i++) {
      first = choices[i];

      if (choices[i].rankingDetailId == deletedChoiceId) {
        choices.splice(i, 1);
        i--;
        continue;
      }
      if (choices[i].rank > deletedChoiceRank) {
        choices[i].rank = choices[i].rank - 1;

        this.rankingDetailService.update(choices[i]).subscribe();
      } else if (choices[i].rank < deletedChoiceRank) {
        this.rankingDetailService.update(choices[i]).subscribe();
        continue;
      }
    }

    this.localStorageService.setEditedRankingChoices(choices);
  }
}
