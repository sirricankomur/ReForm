using Business.Abstract.ResponseTypes;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract.ResponseTypes;
using Entities.ResponseTypes;

namespace Business.Concrete.ResponseTypes
{
    public class YesNoResponseManager : IYesNoResponseService
    {
        private IYesNoResponseDal _yesNoResponseDal;

        public YesNoResponseManager(IYesNoResponseDal yesNoResponseDal)
        {
            _yesNoResponseDal = yesNoResponseDal;

        }

        public IDataResult<YesNoResponse> GetById(int responseId)
        {
            return new SuccessDataResult<YesNoResponse>(_yesNoResponseDal.Get(wr => wr.ResponseId == responseId));
        }

        public IResult Create(YesNoResponse yesNoResponse)
        {
            _yesNoResponseDal.Create(yesNoResponse);

            return new SuccessResult(Messages.AddedYesNoQuestion);
        }

        public IResult Update(YesNoResponse yesNoResponse)
        {
            _yesNoResponseDal.Update(yesNoResponse);
            return new SuccessResult(Messages.UpdatedYesNoQuestion);
        }

        public IResult Delete(YesNoResponse yesNoResponse)
        {
            _yesNoResponseDal.Delete(yesNoResponse);
            return new SuccessResult(Messages.DeletedYesNoQuestion);
        }
    }
}
