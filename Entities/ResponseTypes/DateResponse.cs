using System;
using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace Entities.ResponseTypes
{
    public class DateResponse : IEntity
    {
        [Key]
        public int ResponseId { get; set; }
        public DateTime Value { get; set; }

      
    }
}
