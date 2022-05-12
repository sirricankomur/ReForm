using Business.Abstract.Base;
using Business.Abstract.QuestionTypes;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using DataAccess.Abstract.QuestionTypes;
using Entities.QuestionTypes;

namespace Business.Concrete.QuestionTypes
{
    public class DateQuestionManager : IDateQuestionService
    {
        private IDateQuestionDal _dateQuestionDal;

        public DateQuestionManager(IDateQuestionDal dateQuestionDal)
        {
            _dateQuestionDal = dateQuestionDal;
      
        }

        public IDataResult<DateQuestion> GetById(int questionId)
        {
            return new SuccessDataResult<DateQuestion>(_dateQuestionDal.Get(dq => dq.QuestionId == questionId));
        }

        public IResult Create(DateQuestion dateQuestion)
        {
            _dateQuestionDal.Create(dateQuestion);

            return new SuccessResult(Messages.AddedDateQuestion);
        }

        public IResult Update(DateQuestion dateQuestion)
        {
            _dateQuestionDal.Update(dateQuestion);
            return new SuccessResult(Messages.UpdatedDateQuestion);
        }

        public IResult Delete(DateQuestion dateQuestion)
        {
            _dateQuestionDal.Delete(dateQuestion);
            return new SuccessResult(Messages.DeletedDateQuestion);
        }
    }
}
