using System;
using System.Collections.Generic;
using System.Text;
using Core.Utilities.Results;
using Entities.QuestionTypes;

namespace Business.Abstract.QuestionTypes
{
    public interface IOpinionScaleQuestionService
    {
        IDataResult<OpinionScaleQuestion> GetById(int questionId);
        IResult Create(OpinionScaleQuestion opinionScaleQuestion);
        IResult Update(OpinionScaleQuestion opinionScaleQuestion);
        IResult Delete(OpinionScaleQuestion opinionScaleQuestion);

    }
}
