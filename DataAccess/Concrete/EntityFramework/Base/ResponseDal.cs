using System.Collections.Generic;
using System.Linq;
using Core.DataAccess.EntityFramework;
using DataAccess.Abstract.Base;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.Base;

namespace DataAccess.Concrete.EntityFramework.Base
{
    public class ResponseDal : EfEntityRepositoryBase<Response, MsSqlContext>, IResponseDal
    {
       

        //public List<Form> GetAllByUserId(int userId)
        //{

        //    using (var context = new MsSqlContext())
        //    {
        //        var result = from form in context.Forms
        //            join userForm in context.UserForms on form.Id equals userForm.FormId
        //            where userForm.UserId == userId
        //            select new Form
        //                { Id = form.Id, Name = form.Name, Questions = form.Questions, Responses = form.Responses };

        //        return result.ToList();
        //    }

        //    //return null;
        //}

        public Response GetLastResponse()
        {
            using (MsSqlContext context = new MsSqlContext())
            {
                return context.Set<Response>().OrderByDescending(r => r.Id)
                    .FirstOrDefault();
            }

        }

        public List<Response> GetLastResponses(int limit)
        {
            using (MsSqlContext context = new MsSqlContext())
            {
                var result = context.Set<Response>().OrderByDescending(r => r.Id)
                    .Take(limit);

                return result.ToList();
            }
        }
    }
}
