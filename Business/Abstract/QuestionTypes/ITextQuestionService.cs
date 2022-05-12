using System;
using System.Collections.Generic;
using System.Text;
using Core.Utilities.Results;
using Entities.QuestionTypes;

namespace Business.Abstract.QuestionTypes
{
    public interface ITextQuestionService
    {
        IDataResult<TextQuestion> GetById(int questionId);
        IResult Create(TextQuestion textQuestion);
        IResult Update(TextQuestion textQuestion);
        IResult Delete(TextQuestion textQuestion);

    }
}
