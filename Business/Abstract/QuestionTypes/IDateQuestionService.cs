using System;
using System.Collections.Generic;
using System.Text;
using Core.Utilities.Results;
using Entities.QuestionTypes;

namespace Business.Abstract.QuestionTypes
{
    public interface IDateQuestionService
    {
        IDataResult<DateQuestion> GetById(int questionId);
        IResult Create(DateQuestion dateQuestion);
        IResult Update(DateQuestion dateQuestion);
        IResult Delete(DateQuestion dateQuestion);

    }
}
