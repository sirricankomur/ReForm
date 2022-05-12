using System;
using System.Collections.Generic;
using System.Text;
using Core.Utilities.Results;
using Entities.QuestionTypes;

namespace Business.Abstract.QuestionTypes
{
    public interface IRatingQuestionService
    {
        IDataResult<RatingQuestion> GetById(int questionId);
        IResult Create(RatingQuestion dateQuestion);
        IResult Update(RatingQuestion dateQuestion);
        IResult Delete(RatingQuestion dateQuestion);
    }
}
