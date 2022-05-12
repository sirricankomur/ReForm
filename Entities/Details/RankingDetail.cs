using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace Entities.Details
{
    public class RankingDetail : IEntity
    {
        [Key]
        public int RankingDetailId { get; set; }
        public int RankingQuestionId { get; set; }
        public int Rank { get; set; }
        public string Title { get; set; }

    }
}
