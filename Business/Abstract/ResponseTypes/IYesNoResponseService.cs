using Core.Utilities.Results;
using Entities.ResponseTypes;

namespace Business.Abstract.ResponseTypes
{
    public interface IYesNoResponseService
    {
        IDataResult<YesNoResponse> GetById(int responseId);
        IResult Create(YesNoResponse yesNoResponse);
        IResult Update(YesNoResponse yesNoResponse);
        IResult Delete(YesNoResponse yesNoResponse);
    }
}
