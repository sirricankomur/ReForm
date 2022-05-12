using System.Linq;
using Core.DataAccess.EntityFramework;
using DataAccess.Abstract.QuestionTypes;
using DataAccess.Abstract.ResponseTypes;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.ResponseTypes;

namespace DataAccess.Concrete.EntityFramework.ResponseTypes
{
    public class MultipleChoiceResponseDal : EfEntityRepositoryBase<MultipleChoiceResponse, MsSqlContext>, IMultipleChoiceResponseDal
    {
        public MultipleChoiceResponse GetById(int responseId)
        {
            using (var context = new MsSqlContext())
            {
                var result = from multipleChoiceResponse in context.MultipleChoiceResponses
                             where multipleChoiceResponse.ResponseId == responseId
                             select new MultipleChoiceResponse
                             {
                                 ResponseId = multipleChoiceResponse.ResponseId,
                                 Value = multipleChoiceResponse.Value
                                 
                             };
                //where form.Id == formId
                //select new Form
                //    { Id = form.Id, Name = form.Name, Questions = form.Questions, Responses = form.Responses };

                return result.SingleOrDefault();
            }
        }
    }
}
