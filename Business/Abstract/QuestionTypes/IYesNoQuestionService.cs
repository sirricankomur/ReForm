using System;
using System.Collections.Generic;
using System.Text;
using Core.Utilities.Results;
using Entities.QuestionTypes;

namespace Business.Abstract.QuestionTypes
{
    public interface IYesNoQuestionService
    {
        IDataResult<YesNoQuestion> GetById(int questionId);
        IResult Create(YesNoQuestion yesNoQuestion);
        IResult Update(YesNoQuestion yesNoQuestion);
        IResult Delete(YesNoQuestion yesNoQuestion);
    }
}
