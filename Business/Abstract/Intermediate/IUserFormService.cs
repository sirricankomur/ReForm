using Core.Utilities.Results;
using Entities.Intermediate;

namespace Business.Abstract.Intermediate
{
    public interface IUserFormService
    {
        IResult AddUserForm(UserForm userForm);
    }
}
