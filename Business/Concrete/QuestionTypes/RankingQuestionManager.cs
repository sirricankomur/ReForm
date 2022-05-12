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
    public class RankingQuestionManager : IRankingQuestionService
    {
        private IRankingQuestionDal _rankingQuestionDal;

        public RankingQuestionManager(IRankingQuestionDal rankingQuestionDal)
        {
            _rankingQuestionDal = rankingQuestionDal;

        }

        public IDataResult<RankingQuestion> GetById(int questionId)
        {
            //return new SuccessDataResult<RankingQuestion>(_rankingQuestionDal.Get(pnq => pnq.QuestionId == questionId));
            return new SuccessDataResult<RankingQuestion>(_rankingQuestionDal.GetById(questionId));
        }

        public IResult Create(RankingQuestion rankingQuestion)
        {
            _rankingQuestionDal.Create(rankingQuestion);

            return new SuccessResult(Messages.AddedRankingQuestion);
        }

        public IResult Update(RankingQuestion rankingQuestion)
        {
            _rankingQuestionDal.Update(rankingQuestion);
            return new SuccessResult(Messages.UpdatedRankingQuestion);
        }

        public IResult Delete(RankingQuestion rankingQuestion)
        {
            _rankingQuestionDal.Delete(rankingQuestion);
            return new SuccessResult(Messages.DeletedRankingQuestion);
        }
    }
}
