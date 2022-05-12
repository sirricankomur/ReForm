using Business.Abstract.ResponseTypes;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract.ResponseTypes;
using Entities.ResponseTypes;

namespace Business.Concrete.ResponseTypes
{
    public class RankingResponseManager : IRankingResponseService
    {
        private IRankingResponseDal _rankingResponseDal;

        public RankingResponseManager(IRankingResponseDal rankingResponseDal)
        {
            _rankingResponseDal = rankingResponseDal;

        }

        public IDataResult<RankingResponse> GetById(int responseId)
        {
            //return new SuccessDataResult<RankingQuestion>(_rankingQuestionDal.Get(pnq => pnq.QuestionId == questionId));
            return new SuccessDataResult<RankingResponse>(_rankingResponseDal.GetById(responseId));
        }

        public IResult Create(RankingResponse rankingResponse)
        {
            _rankingResponseDal.Create(rankingResponse);

            return new SuccessResult(Messages.AddedRankingQuestion);
        }

        public IResult Update(RankingResponse rankingResponse)
        {
            _rankingResponseDal.Update(rankingResponse);
            return new SuccessResult(Messages.UpdatedRankingQuestion);
        }

        public IResult Delete(RankingResponse rankingResponse)
        {
            _rankingResponseDal.Delete(rankingResponse);
            return new SuccessResult(Messages.DeletedRankingQuestion);
        }
    }
}
