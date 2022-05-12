using System.Collections.Generic;
using Core.Utilities.Results;
using Entities.Base;

namespace Business.Abstract.Base
{
    public interface IFormService
    {
        IDataResult<List<Form>> GetAll();
        IDataResult<Form> GetById(int formId);
        IResult Create(Form form);
        IResult Update(Form form);
        IResult Delete(Form form);

        IDataResult<Form> GetLastForm();
        IDataResult<List<Form>> GetAllByUserId(int userId);
        IDataResult<int> GetQuestionNumber(int formId);


        //IResult AddTransactionalTest(Product product);
    }
}
