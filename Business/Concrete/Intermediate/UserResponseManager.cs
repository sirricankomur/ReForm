using Business.Abstract.Intermediate;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using DataAccess.Abstract.Intermediate;
using Entities.Intermediate;

namespace Business.Concrete.Intermediate
{
    public class UserResponseManager : IUserResponseService
    {
        private IUserResponseDal _userResponseDal;

        public UserResponseManager(IUserResponseDal userResponseDal)
        {
            _userResponseDal = userResponseDal;
        }

        public IResult Create(UserResponse userResponse)
        {
            _userResponseDal.Create(userResponse);
            return new SuccessResult(Messages.ProductAdded);
        }
    }
}
