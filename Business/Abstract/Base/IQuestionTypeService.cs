using System.Collections.Generic;
using Core.Utilities.Results;
using Entities.Base;

namespace Business.Abstract.Base
{
    public interface IQuestionTypeService
    {
        IDataResult<List<QuestionType>> GetAll();
        IDataResult<QuestionType> GetById(int questionTypeId);

    }
}
