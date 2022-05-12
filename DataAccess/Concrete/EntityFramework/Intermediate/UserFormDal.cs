using Core.DataAccess.EntityFramework;
using DataAccess.Abstract.Intermediate;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.Intermediate;

namespace DataAccess.Concrete.EntityFramework.Intermediate
{
    public class UserFormDal : EfEntityRepositoryBase<UserForm, MsSqlContext>, IUserFormDal
    {

       
    }
}
