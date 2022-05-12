using Business.Abstract.ResponseTypes;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract.ResponseTypes;
using Entities.ResponseTypes;

namespace Business.Concrete.ResponseTypes
{
    public class TextResponseManager : ITextResponseService
    {
        private ITextResponseDal _textResponseDal;

        public TextResponseManager(ITextResponseDal textResponseDal)
        {
            _textResponseDal = textResponseDal;

        }

        public IDataResult<TextResponse> GetById(int responseId)
        {
            return new SuccessDataResult<TextResponse>(_textResponseDal.Get(tr => tr.ResponseId == responseId));
        }

        public IResult Create(TextResponse textResponse)
        {
            _textResponseDal.Create(textResponse);

            return new SuccessResult(Messages.AddedTextQuestion);
        }

        public IResult Update(TextResponse textResponse)
        {
            _textResponseDal.Update(textResponse);
            return new SuccessResult(Messages.UpdatedTextQuestion);
        }

        public IResult Delete(TextResponse textResponse)
        {
            _textResponseDal.Delete(textResponse);
            return new SuccessResult(Messages.DeletedTextQuestion);
        }
    }
}
