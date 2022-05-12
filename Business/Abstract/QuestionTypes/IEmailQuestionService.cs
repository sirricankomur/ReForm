using System;
using System.Collections.Generic;
using System.Text;
using Core.Utilities.Results;
using Entities.QuestionTypes;

namespace Business.Abstract.QuestionTypes
{
    public interface IEmailQuestionService
    {
        IDataResult<EmailQuestion> GetById(int questionId);
        IResult Create(EmailQuestion emailQuestion);
        IResult Update(EmailQuestion emailQuestion);
        IResult Delete(EmailQuestion emailQuestion);
    }
}
