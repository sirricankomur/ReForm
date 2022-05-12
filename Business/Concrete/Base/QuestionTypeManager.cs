using System.Collections.Generic;
using Business.Abstract;
using Business.Abstract.Base;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using DataAccess.Abstract.Base;
using Entities.Base;

namespace Business.Concrete.Base
{
    public class QuestionTypeManager : IQuestionTypeService
    {
        private IQuestionTypeDal _questionTypeDal;

        public QuestionTypeManager(IQuestionTypeDal questionTypeDal)
        {
            _questionTypeDal = questionTypeDal;
        }

        public IDataResult<List<QuestionType>> GetAll()
        {
            return new SuccessDataResult<List<QuestionType>>(_questionTypeDal.GetAll(), Messages.QuestionTypesListed);
        }
        public IDataResult<QuestionType> GetById(int questionTypeId)
        {
            return new SuccessDataResult<QuestionType>(_questionTypeDal.Get(qt => qt.Id == questionTypeId));
        }
    }
}
