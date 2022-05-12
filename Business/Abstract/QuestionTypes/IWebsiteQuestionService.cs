using System;
using System.Collections.Generic;
using System.Text;
using Core.Utilities.Results;
using Entities.QuestionTypes;

namespace Business.Abstract.QuestionTypes
{
    public interface IWebsiteQuestionService
    {
        IDataResult<WebsiteQuestion> GetById(int questionId);
        IResult Create(WebsiteQuestion websiteQuestion);
        IResult Update(WebsiteQuestion websiteQuestion);
        IResult Delete(WebsiteQuestion websiteQuestion);
    }
}
