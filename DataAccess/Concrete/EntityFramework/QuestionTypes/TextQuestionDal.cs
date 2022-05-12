using System;
using System.Collections.Generic;
using System.Text;
using Core.DataAccess.EntityFramework;
using DataAccess.Abstract.QuestionTypes;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.QuestionTypes;

namespace DataAccess.Concrete.EntityFramework.QuestionTypes
{
    public class TextQuestionDal : EfEntityRepositoryBase<TextQuestion, MsSqlContext>, ITextQuestionDal
    {
    }
}
