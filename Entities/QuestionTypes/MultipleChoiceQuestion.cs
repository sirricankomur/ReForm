using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Core.Entities;
using Entities.Details;

namespace Entities.QuestionTypes
{
    public class MultipleChoiceQuestion : IEntity
    {
        public MultipleChoiceQuestion()
        {
            MultipleChoiceDetails = new List<MultipleChoiceDetail>();
        }

        [Key]
        public int QuestionId { get; set; }
        public bool IsRequired { get; set; }
        public bool IsMultipleSelection { get; set; }
        public bool IsOtherOption { get; set; }
        public bool IsMultipleSelectionUnlimited { get; set; }
        public bool IsMultipleSelectionExactNumber { get; set; }
        public bool IsMultipleSelectionRange { get; set; }
        public int MultipleSelectionExactNumber { get; set; }
        public int MultipleSelectionMinRange { get; set; }
        public int MultipleSelectionMaxRange { get; set; }

        public List<MultipleChoiceDetail> MultipleChoiceDetails { get; set; }
    }
}
