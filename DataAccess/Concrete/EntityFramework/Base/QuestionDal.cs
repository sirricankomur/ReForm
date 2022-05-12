using System.Linq;
using Core.DataAccess.EntityFramework;
using DataAccess.Abstract.Base;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.Base;

namespace DataAccess.Concrete.EntityFramework.Base
{
    public class QuestionDal : EfEntityRepositoryBase<Question, MsSqlContext>, IQuestionDal
    {
        public Question GetLastQuestion()
        {
            using (MsSqlContext context = new MsSqlContext())
            {
                return context.Set<Question>().OrderByDescending(q => q.Id)
                    .FirstOrDefault();
                ;
            }

        }
    }
}
