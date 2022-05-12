using Business.Abstract.ResponseTypes;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract.ResponseTypes;
using Entities.ResponseTypes;

namespace Business.Concrete.ResponseTypes
{
    public class NumberResponseManager : INumberResponseService
    {
        private INumberResponseDal _numberResponseDal;

        public NumberResponseManager(INumberResponseDal numberResponseDal)
        {
            _numberResponseDal = numberResponseDal;

        }

        public IDataResult<NumberResponse> GetById(int responseId)
        {
            return new SuccessDataResult<NumberResponse>(_numberResponseDal.Get(nr => nr.ResponseId == responseId));
        }

        public IResult Create(NumberResponse numberResponse)
        {
            _numberResponseDal.Create(numberResponse);

            return new SuccessResult(Messages.AddedNumberQuestion);
        }

        public IResult Update(NumberResponse numberResponse)
        {
            _numberResponseDal.Update(numberResponse);
            return new SuccessResult(Messages.UpdatedNumberQuestion);
        }

        public IResult Delete(NumberResponse numberResponse)
        {
            _numberResponseDal.Delete(numberResponse);
            return new SuccessResult(Messages.DeletedNumberQuestion);
        }
    }
}
