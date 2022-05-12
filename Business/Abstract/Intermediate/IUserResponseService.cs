using Core.Utilities.Results;
using Entities.Intermediate;

namespace Business.Abstract.Intermediate
{
    public interface IUserResponseService
    {
        IResult Create(UserResponse userResponse);
    }
}
