using System.Collections.Generic;
using Core.DataAccess;
using Entities.Details;

namespace DataAccess.Abstract.Details
{
    public interface IMultipleChoiceDetailDal : IEntityRepository<MultipleChoiceDetail>
    {
        List<MultipleChoiceDetail> GetMultipleChoices(int questionId);
        MultipleChoiceDetail GetById(int multipleChoiceDetailId);
        MultipleChoiceDetail GetLastMultipleChoiceDetail();
    }
}
