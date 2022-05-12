using Business.Abstract.ResponseTypes;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract.ResponseTypes;
using Entities.ResponseTypes;

namespace Business.Concrete.ResponseTypes
{
    public class WebsiteResponseManager : IWebsiteResponseService
    {
        private IWebsiteResponseDal _websiteResponseDal;

        public WebsiteResponseManager(IWebsiteResponseDal websiteResponseDal)
        {
            _websiteResponseDal = websiteResponseDal;

        }

        public IDataResult<WebsiteResponse> GetById(int responseId)
        {
            return new SuccessDataResult<WebsiteResponse>(_websiteResponseDal.Get(wr => wr.ResponseId == responseId));
        }

        public IResult Create(WebsiteResponse websiteResponse)
        {
            _websiteResponseDal.Create(websiteResponse);

            return new SuccessResult(Messages.AddedWebsiteQuestion);
        }

        public IResult Update(WebsiteResponse websiteResponse)
        {
            _websiteResponseDal.Update(websiteResponse);
            return new SuccessResult(Messages.UpdatedWebsiteQuestion);
        }

        public IResult Delete(WebsiteResponse websiteResponse)
        {
            _websiteResponseDal.Delete(websiteResponse);
            return new SuccessResult(Messages.DeletedWebsiteQuestion);
        }
    }
}
