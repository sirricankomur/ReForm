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
    public class RatingQuestionManager : IRatingQuestionService
    {
        private IRatingQuestionDal _ratingQuestionDal;

        public RatingQuestionManager(IRatingQuestionDal ratingQuestionDal)
        {
            _ratingQuestionDal = ratingQuestionDal;

        }

        public IDataResult<RatingQuestion> GetById(int questionId)
        {
            return new SuccessDataResult<RatingQuestion>(_ratingQuestionDal.Get(rq => rq.QuestionId == questionId));
        }

        public IResult Create(RatingQuestion ratingQuestion)
        {
            _ratingQuestionDal.Create(ratingQuestion);

            return new SuccessResult(Messages.AddedRatingQuestion);
        }

        public IResult Update(RatingQuestion ratingQuestion)
        {
            _ratingQuestionDal.Update(ratingQuestion);
            return new SuccessResult(Messages.UpdatedRatingQuestion);
        }

        public IResult Delete(RatingQuestion ratingQuestion)
        {
            _ratingQuestionDal.Delete(ratingQuestion);
            return new SuccessResult(Messages.DeletedRatingQuestion);
        }
    }
}
