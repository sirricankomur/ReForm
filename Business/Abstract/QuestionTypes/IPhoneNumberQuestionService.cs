using System;
using System.Collections.Generic;
using System.Text;
using Core.Utilities.Results;
using Entities.QuestionTypes;

namespace Business.Abstract.QuestionTypes
{
    public interface IPhoneNumberQuestionService
    {
        IDataResult<PhoneNumberQuestion> GetById(int questionId);
        IResult Create(PhoneNumberQuestion phoneNumberQuestion);
        IResult Update(PhoneNumberQuestion phoneNumberQuestion);
        IResult Delete(PhoneNumberQuestion phoneNumberQuestion);
    }
}
