using Business.Abstract.ResponseTypes;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract.ResponseTypes;
using Entities.ResponseTypes;

namespace Business.Concrete.ResponseTypes
{
    public class EmailResponseManager : IEmailResponseService
    {
        private IEmailResponseDal _emailResponseDal;

        public EmailResponseManager(IEmailResponseDal emailResponseDal)
        {
            _emailResponseDal = emailResponseDal;

        }

        public IDataResult<EmailResponse> GetById(int responseId)
        {
            return new SuccessDataResult<EmailResponse>(_emailResponseDal.Get(er => er.ResponseId == responseId));
        }

        public IResult Create(EmailResponse emailResponse)
        {
            _emailResponseDal.Create(emailResponse);

            return new SuccessResult(Messages.AddedEmailQuestion);
        }

        public IResult Update(EmailResponse emailResponse)
        {
            _emailResponseDal.Update(emailResponse);
            return new SuccessResult(Messages.UpdatedEmailQuestion);
        }

        public IResult Delete(EmailResponse emailResponse)
        {
            _emailResponseDal.Delete(emailResponse);
            return new SuccessResult(Messages.DeletedEmailQuestion);
        }
    }
}
