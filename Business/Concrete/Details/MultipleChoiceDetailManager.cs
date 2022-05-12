using System.Collections.Generic;
using Business.Abstract.Details;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using DataAccess.Abstract.Details;
using Entities.Details;

namespace Business.Concrete.Details
{
    public class MultipleChoiceDetailManager : IMultipleChoiceDetailService
    {
        private IMultipleChoiceDetailDal _multipleChoiceDetailDal;

        public MultipleChoiceDetailManager(IMultipleChoiceDetailDal multipleChoiceDetailDal)
        {
            _multipleChoiceDetailDal = multipleChoiceDetailDal;
        }

        public IResult Create(MultipleChoiceDetail multipleChoiceDetail)
        {
            _multipleChoiceDetailDal.Create(multipleChoiceDetail);

            return new SuccessResult(Messages.AddedMultipleChoiceDetail);
        }

        public IDataResult<MultipleChoiceDetail> GetById(int multipleChoiceDetailId)
        {
           // return new SuccessDataResult<MultipleChoiceDetail>(_multipleChoiceDetailDal.GetById(multipleChoiceDetailId));
            return new SuccessDataResult<MultipleChoiceDetail>(_multipleChoiceDetailDal.Get(m=>m.MultipleChoiceDetailId == multipleChoiceDetailId));
        }

        public IResult Update(MultipleChoiceDetail multipleChoiceDetail)
        {
            _multipleChoiceDetailDal.Update(multipleChoiceDetail);

            return new SuccessResult(Messages.UpdatedMultipleChoiceDetail);
        }

        public IResult Delete(MultipleChoiceDetail multipleChoiceDetail)
        {
            _multipleChoiceDetailDal.Delete(multipleChoiceDetail);

            return new SuccessResult(Messages.DeletedMultipleChoiceDetail);
        }

        public IDataResult<List<MultipleChoiceDetail>> GetMultipleChoices(int questionId)
        {
            return new SuccessDataResult<List<MultipleChoiceDetail>>(_multipleChoiceDetailDal.GetMultipleChoices(questionId));

        }

        public IDataResult<MultipleChoiceDetail> GetLastMultipleChoiceDetail()
        {
            return new SuccessDataResult<MultipleChoiceDetail>(_multipleChoiceDetailDal.GetLastMultipleChoiceDetail());

        }

        public IDataResult<List<MultipleChoiceDetail>> GetAll(int id)
        {
            return new SuccessDataResult<List<MultipleChoiceDetail>>(_multipleChoiceDetailDal.GetAll(m => m.MultipleChoiceQuestionId == id));
        }
    }
}
