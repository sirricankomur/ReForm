using Core.Entities;

namespace Entities.Base
{
    public class Response : IEntity
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public int FormId { get; set; }
        public int UserId { get; set; }
    }
}
