using System.Collections.Generic;
using Business.Abstract;
using Business.Abstract.Base;
using Business.Constants;
using Core.Entities.Concrete;
using Core.Utilities.Results;
using DataAccess.Abstract;
using DataAccess.Abstract.Base;
using Entities.DTOs;

namespace Business.Concrete.Base
{
    public class UserManager : IUserService
    {
        readonly IUserDal _userDal;

        public UserManager(IUserDal userDal)
        {
            _userDal = userDal;
        }

        public IDataResult<List<OperationClaim>> GetClaims(User user)
        {
            return new SuccessDataResult<List<OperationClaim>>(_userDal.GetClaims(user));
        }

        public IDataResult<List<User>> GetAll()
        {
            return new SuccessDataResult<List<User>>(_userDal.GetAll());
        }

        public IDataResult<User> GetById(int userId)
        {
            return new SuccessDataResult<User>(_userDal.Get(u => u.Id == userId));
        }

        public IResult Create(User user)
        {
            _userDal.Create(user);
            return new SuccessResult(Messages.ProductAdded);

        }

        public IResult Update(User user)
        {
            _userDal.Update(user);
            return new SuccessResult(Messages.ProductAdded);
        }

        public IResult Delete(User user)
        {
            _userDal.Delete(user);
            return new SuccessResult(Messages.ProductAdded);
        }

        public IDataResult<User> GetByEmail(string email)
        {

            //if (_userService.GetByEmail(email) != null)
            //{
            //    return new ErrorResult("Kullanıcı mevcut");
            //}
            //return new SuccessResult();


            var result = _userDal.Get(u => u.Email == email.ToLower());

            if (result != null)
            {

                return new SuccessDataResult<User>(result);

            }

            return new ErrorDataResult<User>(Messages.NotFoundUser);
        }

        public IDataResult<UserDetailDto> GetByUserDetail(string email)
        {
            var result = _userDal.Get(u => u.Email == email);

            if (result != null)
            {
                return new SuccessDataResult<UserDetailDto>(_userDal.GetUserDetail(email));

            }

            return new ErrorDataResult<UserDetailDto>(Messages.NotFoundUser);
        }
    }
}
