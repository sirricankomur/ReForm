import { Injectable } from '@angular/core';
import { QuestionService } from '@datas/services/base/question/question.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionSortService {
  constructor(
    private questionService: QuestionService,
    private localStorageService: LocalStorageService
  ) {}

  sort(questions) {
    let questionOrderArray = new Array();
    let questionNewArray = new Array();

    for (let index = 0; index < questions.length; index++) {
      questionOrderArray.push(questions[index].questionOrder);
    }

    questionOrderArray.sort(function (a, b) {
      return a - b;
    });
    for (let i = 0; i < questions.length; i++) {
      for (let j = 0; j < questions.length; j++) {
        if (Number(questionOrderArray[i]) === questions[j].questionOrder) {
          questionNewArray[i] = questions[j];
        }
      }
    }

    return questionNewArray;
  }

  reorder(questionId, targetOrder, questions) {
    let form = this.localStorageService.getEditedForm();
    targetOrder = Number(targetOrder);
    questionId = Number(questionId);

    let questionFirstOrder;
    let isComplete = false;
    let isRise = false;
    let isFall = false;
    let isChanged = true;
    let isFirst = false;
    let isMiddle = false;
    let isEnd = false;

    for (let i = 0; i < targetOrder; i++) {
      if (!isComplete || !isChanged) {
        for (let j = 0; j < questions.length; j++) {
          if (questions[j].id === Number(questionId)) {
            if (targetOrder > questions[j].questionOrder) {
              isRise = true;
            } else if (targetOrder < questions[j].questionOrder) {
              isFall = true;
            } else {
              isChanged = false;
              break;
            }

            if (questions[j].questionOrder == 1) {
              isFirst = true;
            } else if (questions[j].questionOrder == questions.length) {
              isEnd = true;
            } else {
              isMiddle = true;
            }
            questionFirstOrder = questions[j].questionOrder;
            questions[j].questionOrder = targetOrder;
            this.questionService.update(questions[j]).subscribe();
            isComplete = true;
            break;
          }
        }
      }
    }

    for (let k = 0; k < questions.length; k++) {
      if (questions[k].id == questionId) {
        continue;
      }
      if (isFirst) {
        if (questions[k].questionOrder <= targetOrder) {
          questions[k].questionOrder = questions[k].questionOrder - 1;
        } else {
          continue;
        }
      } else if (isEnd) {
        if (questions[k].questionOrder >= targetOrder) {
          questions[k].questionOrder = questions[k].questionOrder + 1;
        } else {
          continue;
        }
      } else if (isMiddle) {
        if (isRise) {
          if (questions[k].questionOrder <= targetOrder) {
            if (questions[k].questionOrder < questionFirstOrder) {
              continue;
            } else {
              questions[k].questionOrder = questions[k].questionOrder - 1;
            }
          } else {
            continue;
          }
        } else if (isFall) {
          if (questions[k].questionOrder >= targetOrder) {
            if (questions[k].questionOrder > questionFirstOrder) {
              continue;
            } else {
              questions[k].questionOrder = questions[k].questionOrder + 1;
            }
          } else {
            continue;
          }
        }
      }

      this.questionService.update(questions[k]).subscribe();
    }

    form.questions = questions;
    this.localStorageService.setEditedForm(form);

    isComplete = false;
  }

  reorderAfterDeleted(deletedQuestionId, deletedQuestionOrder, questions) {
    let form = this.localStorageService.getEditedForm();
    let first;
    for (let i = 0; i < questions.length; i++) {
      first = questions[i];

      if (questions[i].id == deletedQuestionId) {
        questions.splice(i, 1);
        i--;
        continue;
      }
      if (questions[i].questionOrder > deletedQuestionOrder) {
        questions[i].questionOrder = questions[i].questionOrder - 1;
        this.questionService.update(questions[i]).subscribe();
      } else if (questions[i].questionOrder < deletedQuestionOrder) {
        this.questionService.update(questions[i]).subscribe();
        continue;
      }
    }

    form.questions = questions;
    this.localStorageService.setEditedForm(form);
  }
}
