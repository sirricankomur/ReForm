using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace Entities.QuestionTypes
{
    public class OpinionScaleQuestion : IEntity
    {
        [Key]
        public int QuestionId { get; set; }
        public bool IsRequired { get; set; }
        public int MinScale { get; set; }
        public int MaxScale { get; set; }
        public string LabelBeginningText { get; set; }
        public string LabelMiddleText { get; set; }
        public string LabelEndText { get; set; }
    }
}
