using System.Collections.Generic;
using Business.Abstract;
using Business.Abstract.Base;
using Business.Constants;
using Core.Aspects.Autofac.Caching;
using Core.Utilities.Results;
using DataAccess.Abstract;
using DataAccess.Abstract.Base;
using Entities.Base;

namespace Business.Concrete.Base
{
    public class QuestionManager : IQuestionService
    {
        private readonly IQuestionDal _questionDal;

        public QuestionManager(IQuestionDal questionDal)
        {
            _questionDal = questionDal;
            
        }

        public IResult Create(Question question)
        {
            _questionDal.Create(question);
            
            return new SuccessResult(Messages.AddedQuestion);
        }

        public IResult Delete(Question question)
        {
            _questionDal.Delete(question);

            return new SuccessResult(Messages.DeletedQuestion);
        }

        //[CacheAspect]
        //[PerformanceAspect(5)]
        public IDataResult<Question> GetById(int questionId)
        {
            return new SuccessDataResult<Question>(_questionDal.Get(q => q.Id == questionId));
        }

        public IDataResult<Question> GetLastQuestion()
        {
            return new SuccessDataResult<Question>(_questionDal.GetLastQuestion());
        }

        public IDataResult<List<Question>> GetAll()
        {
            return new SuccessDataResult<List<Question>>(_questionDal.GetAll(), Messages.QuestionsListed);
        }

        public IResult Update(Question question)
        {
            _questionDal.Update(question);
            return new SuccessResult(Messages.UpdatedQuestion);
        }
    }
}
