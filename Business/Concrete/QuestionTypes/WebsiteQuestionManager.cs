using System;
using System.Collections.Generic;
using System.Text;
using Business.Abstract.QuestionTypes;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract.QuestionTypes;
using Entities.QuestionTypes;

namespace Business.Concrete.QuestionTypes
{
    public class WebsiteQuestionManager : IWebsiteQuestionService
    {
        private IWebsiteQuestionDal _websiteQuestionDal;

        public WebsiteQuestionManager(IWebsiteQuestionDal websiteQuestionDal)
        {
            _websiteQuestionDal = websiteQuestionDal;

        }

        public IDataResult<WebsiteQuestion> GetById(int questionId)
        {
            return new SuccessDataResult<WebsiteQuestion>(_websiteQuestionDal.Get(wq => wq.QuestionId == questionId));
        }

        public IResult Create(WebsiteQuestion websiteQuestion)
        {
            _websiteQuestionDal.Create(websiteQuestion);

            return new SuccessResult(Messages.AddedWebsiteQuestion);
        }

        public IResult Update(WebsiteQuestion websiteQuestion)
        {
            _websiteQuestionDal.Update(websiteQuestion);
            return new SuccessResult(Messages.UpdatedWebsiteQuestion);
        }

        public IResult Delete(WebsiteQuestion websiteQuestion)
        {
            _websiteQuestionDal.Delete(websiteQuestion);
            return new SuccessResult(Messages.DeletedWebsiteQuestion);
        }
    }
}
