using System.Collections.Generic;
using Core.DataAccess;
using Entities.Base;

namespace DataAccess.Abstract.Base
{
    public interface IFormDal : IEntityRepository<Form>
    {
        List<Form> GetAllByUserId(int userId);
        Form GetById(int formId);
        Form GetLastForm();
        int GetQuestionNumber(int formId);

    }
}
