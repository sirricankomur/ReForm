using System.Collections.Generic;
using Core.Utilities.Results;
using Entities.Intermediate;

namespace Business.Abstract.Intermediate
{
    public interface IFormUserService
    {
        //IDataResult<FormUser> GetById(int userId);
        IResult Create(FormUser formUser);
        IResult Update(FormUser formUser);
        IResult Delete(FormUser formUser);
        IDataResult<List<FormUser>> GetAllByFormId(int formId);
        IDataResult<List<FormUser>> GetAllByUserId(int userId);
        IDataResult<List<FormUser>> GetAll();
    }
}
