using System;
using System.Collections.Generic;
using System.Text;
using Core.Utilities.Results;
using Entities.QuestionTypes;

namespace Business.Abstract.QuestionTypes
{
    public interface IMultipleChoiceQuestionService
    {
        IDataResult<MultipleChoiceQuestion> GetById(int questionId);
        IResult Create(MultipleChoiceQuestion multipleChoiceQuestion);
        IResult Update(MultipleChoiceQuestion multipleChoiceQuestion);
        IResult Delete(MultipleChoiceQuestion multipleChoiceQuestion);

    }
}
