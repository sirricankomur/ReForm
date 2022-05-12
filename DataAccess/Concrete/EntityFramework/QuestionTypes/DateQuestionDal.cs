using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Core.DataAccess.EntityFramework;
using DataAccess.Abstract.QuestionTypes;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.QuestionTypes;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Concrete.EntityFramework.QuestionTypes
{
    public class DateQuestionDal : EfEntityRepositoryBase<DateQuestion, MsSqlContext>, IDateQuestionDal
    {
    }
}
