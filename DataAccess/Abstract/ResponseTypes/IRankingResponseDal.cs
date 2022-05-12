using Core.DataAccess;
using Entities.ResponseTypes;

namespace DataAccess.Abstract.ResponseTypes
{
    public interface IRankingResponseDal : IEntityRepository<RankingResponse>
    {
        RankingResponse GetById(int responseId);

    }
}
