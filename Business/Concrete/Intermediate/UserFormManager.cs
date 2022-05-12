using Business.Abstract.Intermediate;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using DataAccess.Abstract.Intermediate;
using Entities.Intermediate;

namespace Business.Concrete.Intermediate
{
    public class UserFormManager : IUserFormService
    {
        private IUserFormDal _userFormDal;

        public UserFormManager(IUserFormDal userFormDal)
        {
            _userFormDal = userFormDal;
        }

        public IResult AddUserForm(UserForm userForm)
        {
            _userFormDal.Create(userForm);
            return new SuccessResult(Messages.ProductAdded);
        }
    }
}
