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
    public class OpinionScaleQuestionManager : IOpinionScaleQuestionService
    {
        private IOpinionScaleQuestionDal _opinionScaleQuestionDal;

        public OpinionScaleQuestionManager(IOpinionScaleQuestionDal opinionScaleQuestionDal)
        {
            _opinionScaleQuestionDal = opinionScaleQuestionDal;

        }

        public IDataResult<OpinionScaleQuestion> GetById(int questionId)
        {
            return new SuccessDataResult<OpinionScaleQuestion>(_opinionScaleQuestionDal.Get(osq => osq.QuestionId == questionId));
        }

        public IResult Create(OpinionScaleQuestion opinionScaleQuestion)
        {
            _opinionScaleQuestionDal.Create(opinionScaleQuestion);

            return new SuccessResult(Messages.AddedOpinionScaleQuestion);
        }

        public IResult Update(OpinionScaleQuestion opinionScaleQuestion)
        {
            _opinionScaleQuestionDal.Update(opinionScaleQuestion);
            return new SuccessResult(Messages.UpdatedOpinionScaleQuestion);
        }

        public IResult Delete(OpinionScaleQuestion opinionScaleQuestion)
        {
            _opinionScaleQuestionDal.Delete(opinionScaleQuestion);
            return new SuccessResult(Messages.DeletedOpinionScaleQuestion);
        }
    }
}
