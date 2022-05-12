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
    public class NumberQuestionManager : INumberQuestionService
    {
        private INumberQuestionDal _numberQuestionDal;

        public NumberQuestionManager(INumberQuestionDal numberQuestionDal)
        {
            _numberQuestionDal = numberQuestionDal;

        }

        public IDataResult<NumberQuestion> GetById(int questionId)
        {
            return new SuccessDataResult<NumberQuestion>(_numberQuestionDal.Get(nq => nq.QuestionId == questionId));
        }

        public IResult Create(NumberQuestion numberQuestion)
        {
            _numberQuestionDal.Create(numberQuestion);

            return new SuccessResult(Messages.AddedNumberQuestion);
        }

        public IResult Update(NumberQuestion numberQuestion)
        {
            _numberQuestionDal.Update(numberQuestion);
            return new SuccessResult(Messages.UpdatedNumberQuestion);
        }

        public IResult Delete(NumberQuestion numberQuestion)
        {
            _numberQuestionDal.Delete(numberQuestion);
            return new SuccessResult(Messages.DeletedNumberQuestion);
        }
    }
}
