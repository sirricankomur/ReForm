using Core.Utilities.Results;
using Entities.ResponseTypes;

namespace Business.Abstract.ResponseTypes
{
    public interface IWebsiteResponseService
    {
        IDataResult<WebsiteResponse> GetById(int responseId);
        IResult Create(WebsiteResponse websiteResponse);
        IResult Update(WebsiteResponse websiteResponse);
        IResult Delete(WebsiteResponse websiteResponse);
    }
}
