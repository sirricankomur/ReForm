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
    public class YesNoQuestionManager : IYesNoQuestionService
    {
        private IYesNoQuestionDal _yesNoQuestionDal;

        public YesNoQuestionManager(IYesNoQuestionDal yesNoQuestionDal)
        {
            _yesNoQuestionDal = yesNoQuestionDal;

        }

        public IDataResult<YesNoQuestion> GetById(int questionId)
        {
            return new SuccessDataResult<YesNoQuestion>(_yesNoQuestionDal.Get(wq => wq.QuestionId == questionId));
        }

        public IResult Create(YesNoQuestion yesNoQuestion)
        {
            _yesNoQuestionDal.Create(yesNoQuestion);

            return new SuccessResult(Messages.AddedYesNoQuestion);
        }

        public IResult Update(YesNoQuestion yesNoQuestion)
        {
            _yesNoQuestionDal.Update(yesNoQuestion);
            return new SuccessResult(Messages.UpdatedYesNoQuestion);
        }

        public IResult Delete(YesNoQuestion yesNoQuestion)
        {
            _yesNoQuestionDal.Delete(yesNoQuestion);
            return new SuccessResult(Messages.DeletedYesNoQuestion);
        }
    }
}
