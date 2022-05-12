using Business.Abstract.ResponseTypes;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract.ResponseTypes;
using Entities.ResponseTypes;

namespace Business.Concrete.ResponseTypes
{
    public class OpinionScaleResponseManager : IOpinionScaleResponseService
    {
        private IOpinionScaleResponseDal _opinionScaleResponseDal;

        public OpinionScaleResponseManager(IOpinionScaleResponseDal opinionScaleResponseDal)
        {
            _opinionScaleResponseDal = opinionScaleResponseDal;

        }

        public IDataResult<OpinionScaleResponse> GetById(int responseId)
        {
            return new SuccessDataResult<OpinionScaleResponse>(_opinionScaleResponseDal.Get(osr => osr.ResponseId == responseId));
        }

        public IResult Create(OpinionScaleResponse opinionScaleResponse)
        {
            _opinionScaleResponseDal.Create(opinionScaleResponse);

            return new SuccessResult(Messages.AddedOpinionScaleQuestion);
        }

        public IResult Update(OpinionScaleResponse opinionScaleResponse)
        {
            _opinionScaleResponseDal.Update(opinionScaleResponse);
            return new SuccessResult(Messages.UpdatedOpinionScaleQuestion);
        }

        public IResult Delete(OpinionScaleResponse opinionScaleResponse)
        {
            _opinionScaleResponseDal.Delete(opinionScaleResponse);
            return new SuccessResult(Messages.DeletedOpinionScaleQuestion);
        }
    }
}
