﻿using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace Entities.QuestionTypes
{
    public class TextQuestion : IEntity
    {
        [Key]
        public int QuestionId { get; set; }
        public bool IsRequired { get; set; }
        public bool IsMaxCharacters { get; set; }
        public int MaxCharacters { get; set; }
    }
}
