using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Core.Entities;
using Entities.Details;

namespace Entities.QuestionTypes
{
    public class RankingQuestion : IEntity
    {
        public RankingQuestion()
        {
            RankingDetails = new List<RankingDetail>();
        }

        [Key]
        public int QuestionId { get; set; }
        public bool IsRequired { get; set; }

        public List<RankingDetail> RankingDetails { get; set; }
    }
}
