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
    public class EmailQuestionManager : IEmailQuestionService
    {
        private IEmailQuestionDal _emailQuestionDal;

        public EmailQuestionManager(IEmailQuestionDal emailQuestionDal)
        {
            _emailQuestionDal = emailQuestionDal;

        }

        public IDataResult<EmailQuestion> GetById(int questionId)
        {
            return new SuccessDataResult<EmailQuestion>(_emailQuestionDal.Get(eq => eq.QuestionId == questionId));
        }

        public IResult Create(EmailQuestion emailQuestion)
        {
            _emailQuestionDal.Create(emailQuestion);

            return new SuccessResult(Messages.AddedEmailQuestion);
        }

        public IResult Update(EmailQuestion emailQuestion)
        {
            _emailQuestionDal.Update(emailQuestion);
            return new SuccessResult(Messages.UpdatedEmailQuestion);
        }

        public IResult Delete(EmailQuestion emailQuestion)
        {
            _emailQuestionDal.Delete(emailQuestion);
            return new SuccessResult(Messages.DeletedEmailQuestion);
        }
    }
}
