using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business.Abstract.QuestionTypes;
using Entities.QuestionTypes;

namespace WebAPI.Controllers.QuestionTypes
{
    [Route("api/[controller]")]
    [ApiController]
    public class MultipleChoiceQuestionsController : ControllerBase
    {
        private readonly IMultipleChoiceQuestionService _multipleChoiceQuestionService;

        public MultipleChoiceQuestionsController(IMultipleChoiceQuestionService multipleChoiceQuestionService)
        {
            _multipleChoiceQuestionService = multipleChoiceQuestionService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _multipleChoiceQuestionService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(MultipleChoiceQuestion multipleChoiceQuestion)
        {

            var result = _multipleChoiceQuestionService.Create(multipleChoiceQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(MultipleChoiceQuestion multipleChoiceQuestion)
        {

            var result = _multipleChoiceQuestionService.Delete(multipleChoiceQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(MultipleChoiceQuestion multipleChoiceQuestion)
        {
            var result = _multipleChoiceQuestionService.Update(multipleChoiceQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
