using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Core.DataAccess.EntityFramework;
using DataAccess.Abstract.QuestionTypes;
using DataAccess.Concrete.EntityFramework.Contexts;
using Entities.QuestionTypes;

namespace DataAccess.Concrete.EntityFramework.QuestionTypes
{
    public class MultipleChoiceQuestionDal : EfEntityRepositoryBase<MultipleChoiceQuestion, MsSqlContext>, IMultipleChoiceQuestionDal
    {
        public MultipleChoiceQuestion GetById(int questionId)
        {
            using (var context = new MsSqlContext())
            {
                var result = from multipleChoiceQuestion in context.MultipleChoiceQuestions
                    where multipleChoiceQuestion.QuestionId == questionId
                    select new MultipleChoiceQuestion
                    {
                        QuestionId = multipleChoiceQuestion.QuestionId,
                        IsRequired = multipleChoiceQuestion.IsRequired,
                        IsMultipleSelection = multipleChoiceQuestion.IsMultipleSelection,
                        IsOtherOption = multipleChoiceQuestion.IsOtherOption,
                        IsMultipleSelectionUnlimited = multipleChoiceQuestion.IsMultipleSelectionUnlimited,
                        IsMultipleSelectionExactNumber = multipleChoiceQuestion.IsMultipleSelectionExactNumber,
                        IsMultipleSelectionRange = multipleChoiceQuestion.IsMultipleSelectionRange,
                        MultipleSelectionExactNumber = multipleChoiceQuestion.MultipleSelectionExactNumber,
                        MultipleSelectionMinRange = multipleChoiceQuestion.MultipleSelectionMinRange,
                        MultipleSelectionMaxRange = multipleChoiceQuestion.MultipleSelectionMaxRange,
                        MultipleChoiceDetails = multipleChoiceQuestion.MultipleChoiceDetails
                        
                    };
                //where form.Id == formId
                //select new Form
                //    { Id = form.Id, Name = form.Name, Questions = form.Questions, Responses = form.Responses };

                return result.SingleOrDefault();
            }
        }
    }
}
