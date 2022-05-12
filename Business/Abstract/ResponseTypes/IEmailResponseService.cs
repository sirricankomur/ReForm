using Core.Utilities.Results;
using Entities.ResponseTypes;

namespace Business.Abstract.ResponseTypes
{
    public interface IEmailResponseService
    {
        IDataResult<EmailResponse> GetById(int responseId);
        IResult Create(EmailResponse emailResponse);
        IResult Update(EmailResponse emailResponse);
        IResult Delete(EmailResponse emailResponse);
    }
}
