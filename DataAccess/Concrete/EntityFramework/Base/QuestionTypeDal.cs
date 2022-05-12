using Core.DataAccess.EntityFramework;
using DataAccess.Abstract.Base;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.Base;

namespace DataAccess.Concrete.EntityFramework.Base
{
    public class QuestionTypeDal : EfEntityRepositoryBase<QuestionType, MsSqlContext>, IQuestionTypeDal
    {
    }
}
