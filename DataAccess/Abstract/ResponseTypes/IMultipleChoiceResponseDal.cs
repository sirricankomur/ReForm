using Core.DataAccess;
using Entities.ResponseTypes;

namespace DataAccess.Abstract.ResponseTypes
{
    public interface IMultipleChoiceResponseDal : IEntityRepository<MultipleChoiceResponse>
    {
        MultipleChoiceResponse GetById(int responseId);
    }
}
