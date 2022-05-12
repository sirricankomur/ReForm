using Core.Utilities.Results;
using Entities.ResponseTypes;

namespace Business.Abstract.ResponseTypes
{
    public interface ITextResponseService
    {
        IDataResult<TextResponse> GetById(int responseId);
        IResult Create(TextResponse textResponse);
        IResult Update(TextResponse textResponse);
        IResult Delete(TextResponse textResponse);

    }
}
