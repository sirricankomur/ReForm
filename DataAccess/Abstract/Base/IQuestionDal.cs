using Core.DataAccess;
using Entities.Base;

namespace DataAccess.Abstract.Base
{
    public interface IQuestionDal : IEntityRepository<Question>
    {
        Question GetLastQuestion();
    }
}
