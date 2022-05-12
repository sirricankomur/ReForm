using Core.Entities;

namespace Entities.Intermediate
{
    public class FormUser : IEntity
    {
        public int Id { get; set; }
        public int FormId { get; set; }
        public int UserId { get; set; }
    }
}
