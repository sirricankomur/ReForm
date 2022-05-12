using System.Collections.Generic;
using Core.Utilities.Results;
using Entities.Details;

namespace Business.Abstract.Details
{
    public interface IRankingDetailService
    {
        IDataResult<RankingDetail> GetById(int rankingDetailId);
        IResult Create(RankingDetail rankingDetail);
        IResult Update(RankingDetail rankingDetail);
        IResult Delete(RankingDetail rankingDetail);
        IDataResult<List<RankingDetail>> GetRankingChoices(int questionId);
    }
}