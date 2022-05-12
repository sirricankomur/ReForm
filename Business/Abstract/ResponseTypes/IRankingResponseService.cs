using Core.Utilities.Results;
using Entities.ResponseTypes;

namespace Business.Abstract.ResponseTypes
{
    public interface IRankingResponseService
    {
        IDataResult<RankingResponse> GetById(int responseId);
        IResult Create(RankingResponse rankingResponse);
        IResult Update(RankingResponse rankingResponse);
        IResult Delete(RankingResponse rankingResponse);
    }
}
