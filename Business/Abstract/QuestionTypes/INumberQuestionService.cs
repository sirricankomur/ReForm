using System;
using System.Collections.Generic;
using System.Text;
using Core.Utilities.Results;
using Entities.QuestionTypes;

namespace Business.Abstract.QuestionTypes
{
    public interface INumberQuestionService
    {
        IDataResult<NumberQuestion> GetById(int questionId);
        IResult Create(NumberQuestion numberQuestion);
        IResult Update(NumberQuestion numberQuestion);
        IResult Delete(NumberQuestion numberQuestion);

    }
}
