using Core.Entities;

namespace Entities.Base
{
    public class Question:IEntity
    {
        public int Id { get; set; }
       public int QuestionTypeId { get; set; } 
       public int FormId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int QuestionOrder { get; set; }

        //public QuestionType QuestionType { get; set; }
    }
}
