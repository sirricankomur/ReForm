using System.Collections.Generic;
using Business.Abstract;
using Business.Abstract.Base;
using Business.Constants;
using Core.Aspects.Autofac.Caching;
using Core.Utilities.Results;
using DataAccess.Abstract;
using DataAccess.Abstract.Base;
using Entities.Base;

namespace Business.Concrete.Base
{
    public class ResponseManager : IResponseService
    {
        private readonly IResponseDal _responseDal;


        public ResponseManager(IResponseDal responseDal)
        {
            _responseDal = responseDal;
            
        }

        public IDataResult<Response> GetById(int responseId)
        {
            return new SuccessDataResult<Response>(_responseDal.Get(r => r.Id == responseId));
        }

        //public IDataResult<List<Response>> GetAllByFormId(int formId)
        //{
        //    return new SuccessDataResult<List<Response>>(_responseDal.GetAllByFormId(formId));
        //}

        public IDataResult<Response> GetLastResponse()
        {
            return new SuccessDataResult<Response>(_responseDal.GetLastResponse());
        }

        public IDataResult<List<Response>> GetLastResponses(int limit)
        {
            return new SuccessDataResult<List<Response>>(_responseDal.GetLastResponses(limit));
        }

        public IResult Create(Response response)
        {
            _responseDal.Create(response);
            
            return new SuccessResult(Messages.AddedQuestion);
        }

        public IResult Delete(Response response)
        {
            _responseDal.Delete(response);

            return new SuccessResult(Messages.DeletedQuestion);
        }

        public IResult Update(Response response)
        {
            _responseDal.Update(response);
            return new SuccessResult(Messages.UpdatedQuestion);
        }
    }
}
