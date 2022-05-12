using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities;
using Core.Entities.Concrete;
using Entities.Base;

namespace Entities.DTOs
{
    public class UserFormsDto : IDto
    {
        public UserFormsDto()
        {
            Forms = new List<Form>();
        }

        //public int Id { get; set; }
        //public string FormName { get; set; }
        public User User { get; set; }
        public List<Form> Forms { get; set; }
        //public List<Question> Questions { get; set; }
        //public List<Response> Responses { get; set; }

    }
}
