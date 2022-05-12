using System;
using System.Collections.Generic;
using System.Text;
using Core.Utilities.Results;
using Entities.QuestionTypes;

namespace Business.Abstract.QuestionTypes
{
    public interface IRankingQuestionService
    {
        IDataResult<RankingQuestion> GetById(int questionId);
        IResult Create(RankingQuestion rankingQuestion);
        IResult Update(RankingQuestion rankingQuestion);
        IResult Delete(RankingQuestion rankingQuestion);
    }
}
