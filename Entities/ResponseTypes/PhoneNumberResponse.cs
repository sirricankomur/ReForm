using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace Entities.ResponseTypes
{
    public class PhoneNumberResponse : IEntity
    {
        [Key]
        public int ResponseId { get; set; }
        public string Value { get; set; }
    }
}
