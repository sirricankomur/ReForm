import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateModule } from './date/date.module';
import { EmailModule } from './email/email.module';
import { MultipleChoiceModule } from './multiple-choice/multiple-choice.module';
import { NumberModule } from './number/number.module';
import { OpinionScaleModule } from './opinion-scale/opinion-scale.module';
import { PhoneNumberModule } from './phone-number/phone-number.module';
import { RankingModule } from './ranking/ranking.module';
import { RatingModule } from './rating/rating.module';
import { TextModule } from './text/text.module';
import { WebsiteModule } from './website/website.module';
import { YesNoModule } from './yes-no/yes-no.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    DateModule,
    EmailModule,
    MultipleChoiceModule,
    NumberModule,
    OpinionScaleModule,
    PhoneNumberModule,
    RankingModule,
    RatingModule,
    TextModule,
    WebsiteModule,
    YesNoModule,
  ],
})
export class QuestionTypesModule {}
