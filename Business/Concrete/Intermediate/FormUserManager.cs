using System.Collections.Generic;
using Business.Abstract.Intermediate;
using Core.Utilities.Results;
using DataAccess.Abstract;
using DataAccess.Abstract.Intermediate;
using Entities.Intermediate;

namespace Business.Concrete.Intermediate
{
    public class FormUserManager : IFormUserService
    {
        private IFormUserDal _formUserDal;

        public FormUserManager(IFormUserDal formUserDal)
        {
            _formUserDal = formUserDal;
        }

        public IResult Create(FormUser formUser)
        {
            _formUserDal.Create(formUser);
            return new SuccessResult("Created FormUser");
        }

        public IResult Update(FormUser formUser)
        {
            _formUserDal.Update(formUser);
            return new SuccessResult("Updated FormUser");
        }

        public IResult Delete(FormUser formUser)
        {
            _formUserDal.Delete(formUser);
            return new SuccessResult("Deleted FormUser");
        }

        public IDataResult<List<FormUser>> GetAllByFormId(int formId)
        {
            return new SuccessDataResult<List<FormUser>>(_formUserDal.GetAll(f => f.FormId == formId));
        }

        public IDataResult<List<FormUser>> GetAllByUserId(int userId)
        {
            return new SuccessDataResult<List<FormUser>>(_formUserDal.GetAll(f => f.UserId == userId));
        }

        public IDataResult<List<FormUser>> GetAll()
        {
            return new SuccessDataResult<List<FormUser>>(_formUserDal.GetAll());
        }
    }
}
