using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace Entities.QuestionTypes
{
    //[NotMapped]
    public class DateQuestion : IEntity
    {
        [Key]
        public int QuestionId { get; set; }
        
        public bool IsRequired { get; set; }

        //public Question Question { get; set; }
    }
}
