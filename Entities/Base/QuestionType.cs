using Core.Entities;

namespace Entities.Base
{
    public class QuestionType : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
