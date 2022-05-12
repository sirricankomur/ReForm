using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace Entities.QuestionTypes
{
    public class NumberQuestion : IEntity
    {
        [Key]
        public int QuestionId { get; set; }
        public bool IsRequired { get; set; }
        public bool IsMinNumber { get; set; }
        public bool IsMaxNumber { get; set; }
        public int MinNumber { get; set; }
        public int MaxNumber { get; set; }
    }
}
