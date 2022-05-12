using Core.Utilities.Results;
using Entities.ResponseTypes;

namespace Business.Abstract.ResponseTypes
{
    public interface IRatingResponseService
    {
        IDataResult<RatingResponse> GetById(int responseId);
        IResult Create(RatingResponse dateResponse);
        IResult Update(RatingResponse dateResponse);
        IResult Delete(RatingResponse dateResponse);
    }
}
