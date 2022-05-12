using System.Collections.Generic;
using Core.Entities.Concrete;
using Core.Utilities.Results;
using Entities.DTOs;

namespace Business.Abstract.Base
{
    public interface IUserService
    {
        IDataResult<List<OperationClaim>> GetClaims(User user);
        IDataResult<List<User>> GetAll();

        IDataResult<User> GetByEmail(string email);
        IDataResult<UserDetailDto> GetByUserDetail(string email);
        IDataResult<User> GetById(int userId);
        IResult Create(User user);
        IResult Update(User user);
        IResult Delete(User user);
    }
}
