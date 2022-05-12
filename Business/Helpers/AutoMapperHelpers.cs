using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using Entities.DTOs;

namespace Business.Helpers
{
    class AutoMapperHelpers:Profile
    {
        public AutoMapperHelpers()
        {
            //CreateMap<UserForm, FormOfUserDto>().ForMember(dest => dest.Forms, opt =>
            //{
            //    opt.MapFrom(src => src.Forms.SingleOrDefault(f=>f.));
            //});
        }
    }
}
