﻿using Core.DataAccess.EntityFramework;
using DataAccess.Abstract.QuestionTypes;
using DataAccess.Abstract.ResponseTypes;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.ResponseTypes;

namespace DataAccess.Concrete.EntityFramework.ResponseTypes
{
    public class EmailResponseDal : EfEntityRepositoryBase<EmailResponse, MsSqlContext>, IEmailResponseDal
    {
    }
}
