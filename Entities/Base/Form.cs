using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Core.Entities;
using Entities.Intermediate;

namespace Entities.Base
{
    public class Form : IEntity
    {
        public Form()
        {
            Questions = new List<Question>();
            Responses = new List<Response>();
            FormUsers = new List<FormUser>();
        }

        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Question> Questions { get; set; }
        public List<Response> Responses { get; set; }
        public List<FormUser> FormUsers { get; set; }
    }
}
