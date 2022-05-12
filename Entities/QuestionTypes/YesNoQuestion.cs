using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace Entities.QuestionTypes
{
    public class YesNoQuestion : IEntity
    {
        [Key]
        public int QuestionId { get; set; }
        public bool IsRequired { get; set; }
    }
}
