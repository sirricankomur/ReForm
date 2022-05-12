using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Core.DataAccess.EntityFramework;
using DataAccess.Abstract.QuestionTypes;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.QuestionTypes;

namespace DataAccess.Concrete.EntityFramework.QuestionTypes
{
    public class RankingQuestionDal : EfEntityRepositoryBase<RankingQuestion, MsSqlContext>, IRankingQuestionDal
    {
        public RankingQuestion GetById(int questionId)
        {
            using (var context = new MsSqlContext())
            {
                var result = from rankingQuestion in context.RankingQuestions
                             where rankingQuestion.QuestionId == questionId
                             select new RankingQuestion()
                             {
                                 QuestionId = rankingQuestion.QuestionId,
                                 IsRequired = rankingQuestion.IsRequired,
                                 RankingDetails = rankingQuestion.RankingDetails
                             };

                return result.SingleOrDefault();
            }
        }
    }
}
