using System.Collections.Generic;
using System.Linq;
using Core.DataAccess.EntityFramework;
using DataAccess.Abstract.Base;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.Base;

namespace DataAccess.Concrete.EntityFramework.Base
{
    public class FormDal : EfEntityRepositoryBase<Form, MsSqlContext>, IFormDal
    {
        public Form GetById(int formId)
        {
            using (var context = new MsSqlContext())
            {
                var result = from form in context.Forms

                    //join question in context.Questions on formId equals question.FormId
                    //join response in context.Responses on formId equals response.FormId
                    //join formUser in context.FormUsers on formId equals formUser.FormId 

                             where form.Id == formId
                             select new Form { Id = form.Id, Name = form.Name, Questions = form.Questions, Responses = form.Responses, FormUsers = form.FormUsers};
                            // select new Form { Id = form.Id, Name = form.Name, Questions = form.Questions, Responses = form.Responses, Users = form.Users};
                //where form.Id == formId
                //select new Form
                //    { Id = form.Id, Name = form.Name, Questions = form.Questions, Responses = form.Responses };

                return result.SingleOrDefault();
            }
        }

        public List<Form> GetAllByUserId(int userId)
        {

            using (var context = new MsSqlContext())
            {
                var result = from form in context.Forms
                             join userForm in context.UserForms on form.Id equals userForm.FormId
                             where userForm.UserId == userId
                             
                select new Form { Id = form.Id, Name = form.Name, Questions = form.Questions, Responses = form.Responses, FormUsers = form.FormUsers };


                return result.ToList();
            }

            //return null;
        }


        public Form GetLastForm()
        {
            using (var context = new MsSqlContext())
            {
                return context.Set<Form>().OrderByDescending(f => f.Id)
                    .FirstOrDefault();
            }

        }

        public int GetQuestionNumber(int formId)
        {
            // return null;
            //using (var context = new MsSqlContext())
            //{
            //    var result = from form in context.Forms
            //                     join question in context.Questions on form.Id equals question.FormId
            //                     where question.FormId == formId
            //                     select question;
            //                 //select new Form
            //                 //{ Id = form.Id, Name = form.Name, Questions = form.Questions, Responses = form.Responses };

            //    return context.Set<Form>().FirstOrDefault(result);
            //}

            //using (var context = new MsSqlContext())
            //{
            //    var result = (from form in context.Forms
            //                  join question in context.Questions on form.Id equals question.FormId
            //                  where form.Id == formId
                              
            //    //where form.Id == formId
            //    //select new Form
            //    //    { Id = form.Id, Name = form.Name, Questions = form.Questions, Responses = form.Responses };

            //    return result;
            //}

            return 0;
        }
    }
}
