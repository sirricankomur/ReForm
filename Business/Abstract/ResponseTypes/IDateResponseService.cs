using Core.Utilities.Results;
using Entities.ResponseTypes;

namespace Business.Abstract.ResponseTypes
{
    public interface IDateResponseService
    {
        IDataResult<DateResponse> GetById(int responseId);
        IResult Create(DateResponse dateResponse);
        IResult Update(DateResponse dateResponse);
        IResult Delete(DateResponse dateResponse);
    }
}
