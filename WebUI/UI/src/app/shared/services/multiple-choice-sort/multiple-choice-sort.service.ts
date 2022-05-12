import { Injectable } from '@angular/core';
import { MultipleChoiceDetailService } from '@datas/services/question-types/multiple-choice/multiple-choice-detail.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class MultipleChoiceSortService {
  constructor(
    private multipleChoiceDetailService: MultipleChoiceDetailService,
    private localStorageService: LocalStorageService
  ) {}

  reorderAfterDeleted(deletedChoiceId, deletedChoiceLetter, choices) {
    let first;
    for (let i = 0; i < choices.length; i++) {
      first = choices[i];

      if (choices[i].multipleChoiceDetailId == deletedChoiceId) {
        choices.splice(i, 1);
        i--;
        continue;
      }
      if (choices[i].choiceOrder > deletedChoiceLetter) {
        choices[i].choiceOrder = choices[i].choiceOrder - 1;
        this.multipleChoiceDetailService.update(choices[i]).subscribe();
      } else if (choices[i].choiceOrder < deletedChoiceLetter) {
        this.multipleChoiceDetailService.update(choices[i]).subscribe();
        continue;
      }
    }
    this.localStorageService.setEditedMultipleChoices(choices);
  }
}
