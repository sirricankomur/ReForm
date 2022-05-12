using System.Collections.Generic;
using Core.Utilities.Results;
using Entities.Details;

namespace Business.Abstract.Details
{
    public interface IMultipleChoiceDetailService
    {
        IResult Create(MultipleChoiceDetail multipleChoiceDetail);
        IDataResult<MultipleChoiceDetail> GetById(int multipleChoiceDetailId);
        IDataResult<List<MultipleChoiceDetail>> GetAll(int id);

        //IDataResult<MultipleChoiceDetail> GetLastQuestion();
        IResult Update(MultipleChoiceDetail multipleChoiceDetail);
        IResult Delete(MultipleChoiceDetail multipleChoiceDetail);
        IDataResult<List<MultipleChoiceDetail>> GetMultipleChoices(int questionId);
        IDataResult<MultipleChoiceDetail> GetLastMultipleChoiceDetail();

    }
}
