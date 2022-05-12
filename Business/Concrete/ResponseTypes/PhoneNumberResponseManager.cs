using Business.Abstract.ResponseTypes;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract.ResponseTypes;
using Entities.ResponseTypes;

namespace Business.Concrete.ResponseTypes
{
    public class PhoneNumberResponseManager : IPhoneNumberResponseService
    {
        private IPhoneNumberResponseDal _phoneNumberResponseDal;

        public PhoneNumberResponseManager(IPhoneNumberResponseDal phoneNumberResponseDal)
        {
            _phoneNumberResponseDal = phoneNumberResponseDal;

        }

        public IDataResult<PhoneNumberResponse> GetById(int responseId)
        {
            return new SuccessDataResult<PhoneNumberResponse>(_phoneNumberResponseDal.Get(pnr => pnr.ResponseId == responseId));
        }

        public IResult Create(PhoneNumberResponse phoneNumberResponse)
        {
            _phoneNumberResponseDal.Create(phoneNumberResponse);

            return new SuccessResult(Messages.AddedPhoneNumberQuestion);
        }

        public IResult Update(PhoneNumberResponse phoneNumberResponse)
        {
            _phoneNumberResponseDal.Update(phoneNumberResponse);
            return new SuccessResult(Messages.UpdatedPhoneNumberQuestion);
        }

        public IResult Delete(PhoneNumberResponse phoneNumberResponse)
        {
            _phoneNumberResponseDal.Delete(phoneNumberResponse);
            return new SuccessResult(Messages.DeletedPhoneNumberQuestion);
        }
    }
}
