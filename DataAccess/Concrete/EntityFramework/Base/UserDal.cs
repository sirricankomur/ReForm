using System.Collections.Generic;
using System.Linq;
using Core.DataAccess.EntityFramework;
using Core.Entities.Concrete;
using DataAccess.Abstract.Base;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.DTOs;

namespace DataAccess.Concrete.EntityFramework.Base
{
    public class UserDal : EfEntityRepositoryBase<User, MsSqlContext>, IUserDal
    {
        public List<OperationClaim> GetClaims(User user)
        {
            using (var context = new MsSqlContext())
            {
                var result = from operationClaim in context.OperationClaims
                             join userOperationClaim in context.UserOperationClaims
                                 on operationClaim.Id equals userOperationClaim.OperationClaimId
                             where userOperationClaim.UserId == user.Id
                             select new OperationClaim { Id = operationClaim.Id, Name = operationClaim.Name };
                return result.ToList();

            }
        }

        public UserDetailDto GetUserDetail(string email)
        {
            using (var context = new MsSqlContext())
            {
                var result = from user in context.Users
                    where (user.Email == email)
                    select new UserDetailDto
                    {
                        Id = user.Id,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        Email = user.Email
                    };
                return result.SingleOrDefault();

            }
        }
    }
}
