using System.Linq;
using Core.DataAccess.EntityFramework;
using DataAccess.Abstract.QuestionTypes;
using DataAccess.Abstract.ResponseTypes;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.ResponseTypes;

namespace DataAccess.Concrete.EntityFramework.ResponseTypes
{
    public class RankingResponseDal : EfEntityRepositoryBase<RankingResponse, MsSqlContext>, IRankingResponseDal
    {
        public RankingResponse GetById(int responseId)
        {
            using (var context = new MsSqlContext())
            {
                var result = from rankingResponse in context.RankingResponses
                             where rankingResponse.ResponseId == responseId
                             select new RankingResponse
                             {
                                 ResponseId = rankingResponse.ResponseId,
                                 Value = rankingResponse.Value
                             };

                return result.SingleOrDefault();
            }
        }
    }
}
