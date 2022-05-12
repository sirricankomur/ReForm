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
    public class TextQuestionManager : ITextQuestionService
    {
        private ITextQuestionDal _textQuestionDal;

        public TextQuestionManager(ITextQuestionDal textQuestionDal)
        {
            _textQuestionDal = textQuestionDal;

        }

        public IDataResult<TextQuestion> GetById(int questionId)
        {
            return new SuccessDataResult<TextQuestion>(_textQuestionDal.Get(tq => tq.QuestionId == questionId));
        }

        public IResult Create(TextQuestion textQuestion)
        {
            _textQuestionDal.Create(textQuestion);

            return new SuccessResult(Messages.AddedTextQuestion);
        }

        public IResult Update(TextQuestion textQuestion)
        {
            _textQuestionDal.Update(textQuestion);
            return new SuccessResult(Messages.UpdatedTextQuestion);
        }

        public IResult Delete(TextQuestion textQuestion)
        {
            _textQuestionDal.Delete(textQuestion);
            return new SuccessResult(Messages.DeletedTextQuestion);
        }
    }
}
