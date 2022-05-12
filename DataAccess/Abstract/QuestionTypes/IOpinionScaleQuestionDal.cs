using System;
using System.Collections.Generic;
using System.Text;
using Core.DataAccess;
using Entities.QuestionTypes;

namespace DataAccess.Abstract.QuestionTypes
{
    public interface IOpinionScaleQuestionDal : IEntityRepository<OpinionScaleQuestion>
    {
    }
}
