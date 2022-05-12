using System;
using System.Collections.Generic;
using System.Text;
using Business.Abstract.QuestionTypes;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract.QuestionTypes;
using Entities.QuestionTypes;

namespace Business.Concrete.QuestionTypes
{
    public class PhoneNumberQuestionManager : IPhoneNumberQuestionService
    {
        private IPhoneNumberQuestionDal _phoneNumberQuestionDal;

        public PhoneNumberQuestionManager(IPhoneNumberQuestionDal phoneNumberQuestionDal)
        {
            _phoneNumberQuestionDal = phoneNumberQuestionDal;

        }

        public IDataResult<PhoneNumberQuestion> GetById(int questionId)
        {
            return new SuccessDataResult<PhoneNumberQuestion>(_phoneNumberQuestionDal.Get(pnq => pnq.QuestionId == questionId));
        }

        public IResult Create(PhoneNumberQuestion phoneNumberQuestion)
        {
            _phoneNumberQuestionDal.Create(phoneNumberQuestion);

            return new SuccessResult(Messages.AddedPhoneNumberQuestion);
        }

        public IResult Update(PhoneNumberQuestion phoneNumberQuestion)
        {
            _phoneNumberQuestionDal.Update(phoneNumberQuestion);
            return new SuccessResult(Messages.UpdatedPhoneNumberQuestion);
        }

        public IResult Delete(PhoneNumberQuestion phoneNumberQuestion)
        {
            _phoneNumberQuestionDal.Delete(phoneNumberQuestion);
            return new SuccessResult(Messages.DeletedPhoneNumberQuestion);
        }
    }
}
