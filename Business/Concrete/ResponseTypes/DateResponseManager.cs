using Business.Abstract.ResponseTypes;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract.ResponseTypes;
using Entities.ResponseTypes;

namespace Business.Concrete.ResponseTypes
{
    public class DateResponseManager : IDateResponseService
    {
        private IDateResponseDal _dateResponseDal;

        public DateResponseManager(IDateResponseDal dateResponseDal)
        {
            _dateResponseDal = dateResponseDal;
      
        }

        public IDataResult<DateResponse> GetById(int responseId)
        {
            return new SuccessDataResult<DateResponse>(_dateResponseDal.Get(dr => dr.ResponseId == responseId));
        }

        public IResult Create(DateResponse dateResponse)
        {
            _dateResponseDal.Create(dateResponse);

            return new SuccessResult(Messages.AddedDateQuestion);
        }

        public IResult Update(DateResponse dateResponse)
        {
            _dateResponseDal.Update(dateResponse);
            return new SuccessResult(Messages.UpdatedDateQuestion);
        }

        public IResult Delete(DateResponse dateResponse)
        {
            _dateResponseDal.Delete(dateResponse);
            return new SuccessResult(Messages.DeletedDateQuestion);
        }
    }
}
