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
    public class MultipleChoiceQuestionManager : IMultipleChoiceQuestionService
    {
        private IMultipleChoiceQuestionDal _multipleChoiceQuestionDal;

        public MultipleChoiceQuestionManager(IMultipleChoiceQuestionDal multipleChoiceQuestionDal)
        {
            _multipleChoiceQuestionDal = multipleChoiceQuestionDal;

        }

        public IDataResult<MultipleChoiceQuestion> GetById(int questionId)
        {
            //return new SuccessDataResult<MultipleChoiceQuestion>(_multipleChoiceQuestionDal.Get(mcq => mcq.QuestionId == questionId));
            return new SuccessDataResult<MultipleChoiceQuestion>(_multipleChoiceQuestionDal.GetById(questionId));
        }

        public IResult Create(MultipleChoiceQuestion multipleChoiceQuestion)
        {
            _multipleChoiceQuestionDal.Create(multipleChoiceQuestion);

            return new SuccessResult(Messages.AddedMultipleChoiceQuestion);
        }

        public IResult Update(MultipleChoiceQuestion multipleChoiceQuestion)
        {
            _multipleChoiceQuestionDal.Update(multipleChoiceQuestion);
            return new SuccessResult(Messages.UpdatedMultipleChoiceQuestion);
        }

        public IResult Delete(MultipleChoiceQuestion multipleChoiceQuestion)
        {
            _multipleChoiceQuestionDal.Delete(multipleChoiceQuestion);
            return new SuccessResult(Messages.DeletedMultipleChoiceQuestion);
        }
    }
}
