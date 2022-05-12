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
    public class FormManager : IFormService
    {
        private readonly IFormDal _formDal;
        

        public FormManager(IFormDal formDal)
        {
            _formDal = formDal;
        }

        public IResult Create(Form form)
        {
            _formDal.Create(form);
            return new SuccessResult(Messages.ProductAdded);
        }

        public IResult Delete(Form form)
        {
            _formDal.Delete(form);
            return new SuccessResult(Messages.DeletedForm);
        }

        public IDataResult<List<Form>> GetAll()
        {
            return new SuccessDataResult<List<Form>>(_formDal.GetAll(), Messages.FormsListed);
        }

        public IDataResult<Form> GetById(int formId)
        {
            return new SuccessDataResult<Form>(_formDal.GetById(formId));
        }

        public IDataResult<List<Form>> GetAllByUserId(int userId)
        {
            return new SuccessDataResult<List<Form>>(_formDal.GetAllByUserId(userId));
        }

        public IDataResult<Form> GetLastForm()
        {
            return new SuccessDataResult<Form>(_formDal.GetLastForm());
        }

        public IDataResult<int> GetQuestionNumber(int formId)
        {
            return new SuccessDataResult<int>(_formDal.GetQuestionNumber(formId));
        }

        public IResult Update(Form form)
        {
            _formDal.Update(form);
            return new SuccessResult(Messages.UpdatedForm);
        }
    }
}
