import { Component, OnInit } from '@angular/core';
import { MultipleChoiceQuestion } from '@datas/models/question-types/multiple-choice-question';
import { MultipleChoiceQuestionService } from '@datas/services/question-types/multiple-choice/multiple-choice-question.service';
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-multiple-choice-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit {
  public editedQuestionSettings: MultipleChoiceQuestion;
  isMultipleSelection: boolean;
  isOtherOption: boolean;
  isMultipleSelectionUnlimited: boolean;
  isMultipleSelectionExactNumber: boolean;
  isMultipleSelectionRange: boolean;

  constructor(
    private multipleChoiceQuestionService: MultipleChoiceQuestionService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  getMultipleSelection() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();

    this.isMultipleSelection = this.editedQuestionSettings.isMultipleSelection;
    return this.isMultipleSelection;
  }

  setMultipleSelection(value: boolean) {
    this.editedQuestionSettings.isMultipleSelection = value;
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  getOtherOption() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    this.isOtherOption = this.editedQuestionSettings.isOtherOption;
    return this.isOtherOption;
  }

  setOtherOption(value: boolean) {
    this.editedQuestionSettings.isOtherOption = value;
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  getMultipleSelectionUnlimited() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    this.isMultipleSelectionUnlimited =
      this.editedQuestionSettings.isMultipleSelectionUnlimited;
    return this.isMultipleSelectionUnlimited;
  }

  setMultipleSelectionUnlimited(value: boolean) {
    this.editedQuestionSettings.isMultipleSelectionUnlimited = value;
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  getMultipleSelectionExactNumber() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    this.isMultipleSelectionExactNumber =
      this.editedQuestionSettings.isMultipleSelectionExactNumber;
    return this.isMultipleSelectionExactNumber;
  }

  setMultipleSelectionExactNumber(value: boolean) {
    this.editedQuestionSettings.isMultipleSelectionExactNumber = value;
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  getMultipleSelectionRange() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    this.isMultipleSelectionRange =
      this.editedQuestionSettings.isMultipleSelectionRange;
    return this.isMultipleSelectionRange;
  }

  setMultipleSelectionRange(value: boolean) {
    this.editedQuestionSettings.isMultipleSelectionRange = value;
    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  setMultipleSelectionDetails(value) {
    if (value === 'Unlimited') {
      this.editedQuestionSettings.isMultipleSelectionUnlimited = true;
      this.editedQuestionSettings.isMultipleSelectionExactNumber = false;
      this.editedQuestionSettings.isMultipleSelectionRange = false;
    } else if (value === 'Exact number') {
      this.editedQuestionSettings.isMultipleSelectionUnlimited = false;
      this.editedQuestionSettings.isMultipleSelectionExactNumber = true;
      this.editedQuestionSettings.isMultipleSelectionRange = false;
    } else if (value === 'Range') {
      this.editedQuestionSettings.isMultipleSelectionUnlimited = false;
      this.editedQuestionSettings.isMultipleSelectionExactNumber = false;
      this.editedQuestionSettings.isMultipleSelectionRange = true;
    }

    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  setExactNumber(exactNumber) {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    if (Number(exactNumber.target.value) < 1) {
      this.editedQuestionSettings.multipleSelectionExactNumber = 1;
    } else {
      if (this.editedQuestionSettings.isOtherOption) {
        if (
          Number(exactNumber.target.value) >
          this.editedQuestionSettings.multipleChoiceDetails.length
        ) {
          this.editedQuestionSettings.multipleSelectionExactNumber =
            this.editedQuestionSettings.multipleChoiceDetails.length;
        } else {
          this.editedQuestionSettings.multipleSelectionExactNumber = Number(
            exactNumber.target.value
          );
        }
      } else {
        if (
          Number(exactNumber.target.value) >
          this.editedQuestionSettings.multipleChoiceDetails.length - 1
        ) {
          this.editedQuestionSettings.multipleSelectionExactNumber =
            this.editedQuestionSettings.multipleChoiceDetails.length;
        } else {
          this.editedQuestionSettings.multipleSelectionExactNumber = Number(
            exactNumber.target.value
          );
        }
      }
    }

    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
  }

  getExactNumber() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    return this.editedQuestionSettings.multipleSelectionExactNumber;
  }

  setMinRange(minRange) {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    if (this.getMaxRange()) {
      if (this.editedQuestionSettings.isOtherOption) {
        if (
          Number(minRange.target.value) >
          this.editedQuestionSettings.multipleChoiceDetails.length
        ) {
          this.editedQuestionSettings.multipleSelectionMinRange =
            this.editedQuestionSettings.multipleChoiceDetails.length;
          this.editedQuestionSettings.multipleSelectionMaxRange =
            this.editedQuestionSettings.multipleChoiceDetails.length;
        } else {
          if (Number(minRange.target.value) > this.getMaxRange()) {
            this.editedQuestionSettings.multipleSelectionMinRange = Number(
              minRange.target.value
            );
            this.editedQuestionSettings.multipleSelectionMaxRange =
              this.editedQuestionSettings.multipleChoiceDetails.length;
          } else {
            this.editedQuestionSettings.multipleSelectionMinRange = Number(
              minRange.target.value
            );
          }
        }
      } else if (!this.editedQuestionSettings.isOtherOption) {
        if (
          Number(minRange.target.value) >
          this.editedQuestionSettings.multipleChoiceDetails.length - 1
        ) {
          this.editedQuestionSettings.multipleSelectionMaxRange =
            this.editedQuestionSettings.multipleChoiceDetails.length - 1;
        } else {
          if (Number(minRange.target.value) > this.getMaxRange()) {
            this.editedQuestionSettings.multipleSelectionMinRange = Number(
              minRange.target.value
            );

            this.editedQuestionSettings.multipleSelectionMaxRange =
              this.editedQuestionSettings.multipleChoiceDetails.length - 1;
          } else {
            this.editedQuestionSettings.multipleSelectionMinRange = Number(
              minRange.target.value
            );
          }
        }
      }
    } else {
      if (this.editedQuestionSettings.isOtherOption) {
        if (
          Number(minRange.target.value) >
          this.editedQuestionSettings.multipleChoiceDetails.length
        ) {
          this.editedQuestionSettings.multipleSelectionMinRange =
            this.editedQuestionSettings.multipleChoiceDetails.length;
          this.editedQuestionSettings.multipleSelectionMaxRange =
            this.editedQuestionSettings.multipleChoiceDetails.length;
        } else {
          this.editedQuestionSettings.multipleSelectionMinRange = Number(
            minRange.target.value
          );
          this.editedQuestionSettings.multipleSelectionMaxRange =
            this.editedQuestionSettings.multipleChoiceDetails.length;
        }
      } else if (!this.editedQuestionSettings.isOtherOption) {
        if (
          Number(minRange.target.value) >
          this.editedQuestionSettings.multipleChoiceDetails.length - 1
        ) {
          this.editedQuestionSettings.multipleSelectionMinRange =
            this.editedQuestionSettings.multipleChoiceDetails.length - 1;
          this.editedQuestionSettings.multipleSelectionMaxRange =
            this.editedQuestionSettings.multipleChoiceDetails.length - 1;
        } else {
          this.editedQuestionSettings.multipleSelectionMinRange = Number(
            minRange.target.value
          );
          this.editedQuestionSettings.multipleSelectionMinRange =
            this.editedQuestionSettings.multipleChoiceDetails.length - 1;
        }
      }
    }

    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
    this.ngOnInit();
  }

  getMinRange() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();

    return this.editedQuestionSettings.multipleSelectionMinRange;
  }

  setMaxRange(maxRange) {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();

    if (this.getMinRange()) {
      if (this.editedQuestionSettings.isOtherOption) {
        if (
          Number(maxRange.target.value) >
          this.editedQuestionSettings.multipleChoiceDetails.length
        ) {
          this.editedQuestionSettings.multipleSelectionMaxRange =
            this.editedQuestionSettings.multipleChoiceDetails.length;
        } else {
          if (Number(maxRange.target.value) < this.getMinRange()) {
            this.editedQuestionSettings.multipleSelectionMaxRange =
              this.getMinRange();
          } else {
            this.editedQuestionSettings.multipleSelectionMaxRange = Number(
              maxRange.target.value
            );
          }
        }
      } else if (!this.editedQuestionSettings.isOtherOption) {
        if (
          Number(maxRange.target.value) >
          this.editedQuestionSettings.multipleChoiceDetails.length - 1
        ) {
          this.editedQuestionSettings.multipleSelectionMaxRange =
            this.editedQuestionSettings.multipleChoiceDetails.length - 1;
        } else {
          if (Number(maxRange.target.value) < this.getMinRange()) {
            this.editedQuestionSettings.multipleSelectionMaxRange =
              this.getMinRange();
          } else {
            this.editedQuestionSettings.multipleSelectionMaxRange = Number(
              maxRange.target.value
            );
          }
        }
      }
    } else {
      this.editedQuestionSettings.multipleSelectionMinRange = 1;
      if (this.editedQuestionSettings.isOtherOption) {
        if (
          Number(maxRange.target.value) >
          this.editedQuestionSettings.multipleChoiceDetails.length
        ) {
          this.editedQuestionSettings.multipleSelectionMaxRange =
            this.editedQuestionSettings.multipleChoiceDetails.length;
        } else {
          this.editedQuestionSettings.multipleSelectionMaxRange = Number(
            maxRange.target.value
          );
        }
      } else if (!this.editedQuestionSettings.isOtherOption) {
        if (
          Number(maxRange.target.value) >
          this.editedQuestionSettings.multipleChoiceDetails.length - 1
        ) {
          this.editedQuestionSettings.multipleSelectionMaxRange =
            this.editedQuestionSettings.multipleChoiceDetails.length - 1;
        } else {
          this.editedQuestionSettings.multipleSelectionMaxRange = Number(
            maxRange.target.value
          );
        }
      }
    }

    this.localStorageService.setEditedQuestionSettings(
      this.editedQuestionSettings
    );
    this.update(this.editedQuestionSettings);
    this.ngOnInit();
  }

  getMaxRange() {
    this.editedQuestionSettings =
      this.localStorageService.getEditedQuestionSettings();
    return this.editedQuestionSettings.multipleSelectionMaxRange;
  }

  getLength() {
    if (this.editedQuestionSettings.isOtherOption) {
      return this.editedQuestionSettings.multipleChoiceDetails.length;
    } else {
      return this.editedQuestionSettings.multipleChoiceDetails.length - 1;
    }
  }

  private update(editedQuestionSettings) {
    this.multipleChoiceQuestionService
      .update(editedQuestionSettings)
      .subscribe();
  }
}
