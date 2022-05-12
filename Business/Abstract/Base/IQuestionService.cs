using System.Collections.Generic;
using Core.Utilities.Results;
using Entities.Base;

namespace Business.Abstract.Base
{
    public interface IQuestionService
    {
        IDataResult<List<Question>> GetAll();
        IResult Create(Question question);
        IDataResult<Question> GetById(int questionId);
        IDataResult<Question> GetLastQuestion();
        IResult Update(Question question);
        IResult Delete(Question question);

    }
}
