using Core.Utilities.Results;
using Entities.ResponseTypes;

namespace Business.Abstract.ResponseTypes
{
    public interface IPhoneNumberResponseService
    {
        IDataResult<PhoneNumberResponse> GetById(int responseId);
        IResult Create(PhoneNumberResponse phoneNumberResponse);
        IResult Update(PhoneNumberResponse phoneNumberResponse);
        IResult Delete(PhoneNumberResponse phoneNumberResponse);
    }
}
