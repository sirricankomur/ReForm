using Core.Entities;

namespace Entities.Intermediate
{
    public class UserResponse : IEntity
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ResponseId { get; set; }
        public bool IsComplete { get; set; }
    }
}
