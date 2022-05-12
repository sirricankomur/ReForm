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
    public class NumberQuestionsController : ControllerBase
    {
        private readonly INumberQuestionService _numberQuestionService;

        public NumberQuestionsController(INumberQuestionService numberQuestionService)
        {
            _numberQuestionService = numberQuestionService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _numberQuestionService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(NumberQuestion numberQuestion)
        {

            var result = _numberQuestionService.Create(numberQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(NumberQuestion numberQuestion)
        {

            var result = _numberQuestionService.Delete(numberQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(NumberQuestion numberQuestion)
        {
            var result = _numberQuestionService.Update(numberQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
