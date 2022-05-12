using System.Collections.Generic;
using Business.Abstract.Details;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using DataAccess.Abstract.Details;
using Entities.Details;

namespace Business.Concrete.Details
{
    public class RankingDetailManager: IRankingDetailService
    {
        private readonly IRankingDetailDal _rankingDetailDal;

        public RankingDetailManager(IRankingDetailDal rankingDetailDal)
        {
            _rankingDetailDal = rankingDetailDal;
        }

        public IResult Create(RankingDetail rankingDetail)
        {
            _rankingDetailDal.Create(rankingDetail);

            return new SuccessResult(Messages.AddedRankingDetail);
        }

        public IDataResult<RankingDetail> GetById(int rankingDetailId)
        {
            return new SuccessDataResult<RankingDetail>(_rankingDetailDal.Get(rd => rd.RankingDetailId == rankingDetailId));
        }

        public IResult Update(RankingDetail rankingDetail)
        {
            _rankingDetailDal.Update(rankingDetail);

            return new SuccessResult(Messages.UpdatedRankingDetail);
        }

        public IResult Delete(RankingDetail rankingDetail)
        {
            _rankingDetailDal.Delete(rankingDetail);

            return new SuccessResult(Messages.DeletedRankingDetail);
        }

        public IDataResult<List<RankingDetail>> GetRankingChoices(int questionId)
        {
            return new SuccessDataResult<List<RankingDetail>>(_rankingDetailDal.GetRankingChoices(questionId));
        }
    }
}
