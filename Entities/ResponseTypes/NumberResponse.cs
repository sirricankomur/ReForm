﻿using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace Entities.ResponseTypes
{
    public class NumberResponse : IEntity
    {
        [Key]
        public int ResponseId { get; set; }
        public int Value { get; set; }
    }
}
