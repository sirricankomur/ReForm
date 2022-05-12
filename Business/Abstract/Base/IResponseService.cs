using System;
using System.Collections.Generic;
using System.Text;
using Core.Utilities.Results;
using Entities.Base;

namespace Business.Abstract.Base
{
    public interface IResponseService
    {
        IDataResult<Response> GetById(int responseId);
       // IDataResult<List<Response>> GetAllByFormId(int formId);
        IDataResult<Response> GetLastResponse();
        IDataResult<List<Response>> GetLastResponses(int limit);
        IResult Create(Response response);
        IResult Update(Response response);
        IResult Delete(Response response);
    }
}
