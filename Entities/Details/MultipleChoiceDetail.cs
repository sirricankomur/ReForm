using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace Entities.Details
{
    public class MultipleChoiceDetail : IEntity
    {
        //public MultipleChoiceDetail()
        //{
        //    Letters = new List<Letter>();
        //}

        [Key]
        public int MultipleChoiceDetailId { get; set; }
        public int MultipleChoiceQuestionId { get; set; }
        public int ChoiceOrder { get; set; }
        public string Title { get; set; }
        public bool isOtherOption { get; set; }
       // public MultipleChoiceQuestion MultipleChoiceQuestion { get; set; }
       // public List<Letter> Letters { get; set; }
    }
}
