using System.Collections.Generic;
using System.Linq;
using Core.DataAccess.EntityFramework;
using DataAccess.Abstract.Details;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.Details;

namespace DataAccess.Concrete.EntityFramework.Details
{
    public class MultipleChoiceDetailDal : EfEntityRepositoryBase<MultipleChoiceDetail, MsSqlContext>, IMultipleChoiceDetailDal
    {
        public MultipleChoiceDetail GetById(int multipleChoiceDetailId)
        {
            using (var context = new MsSqlContext())
            {
                var result = from multipleChoiceDetail in context.MultipleChoiceDetails
                             where multipleChoiceDetail.MultipleChoiceDetailId == multipleChoiceDetailId
                             select new MultipleChoiceDetail() { MultipleChoiceDetailId = multipleChoiceDetail.MultipleChoiceDetailId, MultipleChoiceQuestionId = multipleChoiceDetail.MultipleChoiceQuestionId, ChoiceOrder = multipleChoiceDetail.ChoiceOrder,  Title = multipleChoiceDetail.Title, isOtherOption = multipleChoiceDetail.isOtherOption};

                return result.SingleOrDefault();
            }
        }

        public MultipleChoiceDetail GetLastMultipleChoiceDetail()
        {
            using (var context = new MsSqlContext())
            {
                return context.Set<MultipleChoiceDetail>().OrderByDescending(mcd => mcd.MultipleChoiceQuestionId)
                    .FirstOrDefault();
            }
        }

        public List<MultipleChoiceDetail> GetMultipleChoices(int questionId)
        {
            using (var context = new MsSqlContext())
            {
                var result = from multipleChoiceDetail in context.MultipleChoiceDetails
                             join multipleChoiceQuestion in context.MultipleChoiceQuestions on multipleChoiceDetail.MultipleChoiceQuestionId equals multipleChoiceQuestion.QuestionId
                             where multipleChoiceQuestion.QuestionId == questionId
                             select new MultipleChoiceDetail
                             { MultipleChoiceDetailId = multipleChoiceDetail.MultipleChoiceDetailId, MultipleChoiceQuestionId = multipleChoiceDetail.MultipleChoiceQuestionId, ChoiceOrder = multipleChoiceDetail.ChoiceOrder, Title = multipleChoiceDetail.Title, isOtherOption = multipleChoiceDetail.isOtherOption};

                return result.ToList();
            }
        }
    }
}
