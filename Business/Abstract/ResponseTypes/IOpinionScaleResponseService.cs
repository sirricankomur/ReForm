using Core.Utilities.Results;
using Entities.ResponseTypes;

namespace Business.Abstract.ResponseTypes
{
    public interface IOpinionScaleResponseService
    {
        IDataResult<OpinionScaleResponse> GetById(int responseId);
        IResult Create(OpinionScaleResponse opinionScaleResponse);
        IResult Update(OpinionScaleResponse opinionScaleResponse);
        IResult Delete(OpinionScaleResponse opinionScaleResponse);

    }
}
