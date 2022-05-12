using System.Collections.Generic;
using Core.DataAccess;
using Entities.Details;

namespace DataAccess.Abstract.Details
{
    public interface IRankingDetailDal : IEntityRepository<RankingDetail>
    {
        List<RankingDetail> GetRankingChoices(int questionId);
    }
}
