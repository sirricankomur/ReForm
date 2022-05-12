using System.Collections.Generic;
using Core.DataAccess;
using Entities.Base;

namespace DataAccess.Abstract.Base
{
    public interface IResponseDal : IEntityRepository<Response>
    {
        //List<Response> GetAllByFormId(int formId);
        Response GetLastResponse();
        List<Response> GetLastResponses(int limit);
    }
}
