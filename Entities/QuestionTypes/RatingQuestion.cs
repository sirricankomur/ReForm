using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace Entities.QuestionTypes
{
    public class RatingQuestion : IEntity
    {
        [Key]
        public int QuestionId { get; set; }
        public bool IsRequired { get; set; }
        public int Rate { get; set; }
    }
}
