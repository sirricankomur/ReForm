using Core.Entities;

namespace Entities.Intermediate
{
    public class UserForm : IEntity
    {
        //public UserForm()
        //{
        //    Forms = new List<Form>();
        //}

        public int Id { get; set; }
        public int UserId { get; set; }
        public int FormId { get; set; }

        //public User User { get; set; }
        //public List<Form> Forms { get; set; }
    }
}
