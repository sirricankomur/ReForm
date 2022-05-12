using Core.Utilities.Results;
using Entities.ResponseTypes;

namespace Business.Abstract.ResponseTypes
{
    public interface IMultipleChoiceResponseService
    {
        IDataResult<MultipleChoiceResponse> GetById(int responseId);
        IResult Create(MultipleChoiceResponse multipleChoiceResponse);
        IResult Update(MultipleChoiceResponse multipleChoiceResponse);
        IResult Delete(MultipleChoiceResponse multipleChoiceResponse);

    }
}
