using System;
using System.Collections.Generic;
using System.Text;
using Core.DataAccess;
using Entities.QuestionTypes;

namespace DataAccess.Abstract.QuestionTypes
{
    public interface IWebsiteQuestionDal : IEntityRepository<WebsiteQuestion>
    {
    }
}
