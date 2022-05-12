using Core.Utilities.Results;
using Entities.ResponseTypes;

namespace Business.Abstract.ResponseTypes
{
    public interface INumberResponseService
    {
        IDataResult<NumberResponse> GetById(int responseId);
        IResult Create(NumberResponse numberResponse);
        IResult Update(NumberResponse numberResponse);
        IResult Delete(NumberResponse numberResponse);

    }
}
