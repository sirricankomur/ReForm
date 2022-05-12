using Business.Abstract.ResponseTypes;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract.ResponseTypes;
using Entities.ResponseTypes;

namespace Business.Concrete.ResponseTypes
{
    public class RatingResponseManager : IRatingResponseService
    {
        private IRatingResponseDal _ratingResponseDal;

        public RatingResponseManager(IRatingResponseDal ratingResponseDal)
        {
            _ratingResponseDal = ratingResponseDal;

        }

        public IDataResult<RatingResponse> GetById(int responseId)
        {
            return new SuccessDataResult<RatingResponse>(_ratingResponseDal.Get(rs => rs.ResponseId == responseId));
        }

        public IResult Create(RatingResponse ratingResponse)
        {
            _ratingResponseDal.Create(ratingResponse);

            return new SuccessResult(Messages.AddedRatingQuestion);
        }

        public IResult Update(RatingResponse ratingResponse)
        {
            _ratingResponseDal.Update(ratingResponse);
            return new SuccessResult(Messages.UpdatedRatingQuestion);
        }

        public IResult Delete(RatingResponse ratingResponse)
        {
            _ratingResponseDal.Delete(ratingResponse);
            return new SuccessResult(Messages.DeletedRatingQuestion);
        }
    }
}
