using System.Collections.Generic;
using System.Linq;
using Core.DataAccess.EntityFramework;
using DataAccess.Abstract.Details;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.Details;

namespace DataAccess.Concrete.EntityFramework.Details
{
    public class RankingDetailDal : EfEntityRepositoryBase<RankingDetail, MsSqlContext>, IRankingDetailDal
    {
        public List<RankingDetail> GetRankingChoices(int questionId)
        {
            using (var context = new MsSqlContext())
            {
                var result = from rankingDetail in context.RankingDetails
                    join rankingQuestion in context.RankingQuestions on rankingDetail.RankingQuestionId equals
                        rankingQuestion.QuestionId
                    where rankingQuestion.QuestionId == questionId
                    select new RankingDetail()
                    {
                        RankingDetailId = rankingDetail.RankingDetailId,
                        RankingQuestionId = rankingDetail.RankingQuestionId, 
                        Rank = rankingDetail.Rank,
                        Title = rankingDetail.Title
                    };
                return result.ToList();
            }
        }
    }
}