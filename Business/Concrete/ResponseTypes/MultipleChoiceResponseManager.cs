using Business.Abstract.ResponseTypes;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract.ResponseTypes;
using Entities.ResponseTypes;

namespace Business.Concrete.ResponseTypes
{
    public class MultipleChoiceResponseManager : IMultipleChoiceResponseService
    {
        private IMultipleChoiceResponseDal _multipleChoiceResponseDal;

        public MultipleChoiceResponseManager(IMultipleChoiceResponseDal multipleChoiceResponseDal)
        {
            _multipleChoiceResponseDal = multipleChoiceResponseDal;

        }

        public IDataResult<MultipleChoiceResponse> GetById(int responseId)
        {
            //return new SuccessDataResult<MultipleChoiceQuestion>(_multipleChoiceQuestionDal.Get(mcq => mcq.QuestionId == questionId));
            return new SuccessDataResult<MultipleChoiceResponse>(_multipleChoiceResponseDal.GetById(responseId));
        }

        public IResult Create(MultipleChoiceResponse multipleChoiceResponse)
        {
            _multipleChoiceResponseDal.Create(multipleChoiceResponse);

            return new SuccessResult(Messages.AddedMultipleChoiceQuestion);
        }

        public IResult Update(MultipleChoiceResponse multipleChoiceResponse)
        {
            _multipleChoiceResponseDal.Update(multipleChoiceResponse);
            return new SuccessResult(Messages.UpdatedMultipleChoiceQuestion);
        }

        public IResult Delete(MultipleChoiceResponse multipleChoiceResponse)
        {
            _multipleChoiceResponseDal.Delete(multipleChoiceResponse);
            return new SuccessResult(Messages.DeletedMultipleChoiceQuestion);
        }
    }
}
