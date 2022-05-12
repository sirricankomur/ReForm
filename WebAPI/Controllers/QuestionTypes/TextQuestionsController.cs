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
    public class TextQuestionsController : ControllerBase
    {
        private readonly ITextQuestionService _textQuestionService;

        public TextQuestionsController(ITextQuestionService textQuestionService)
        {
            _textQuestionService = textQuestionService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _textQuestionService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(TextQuestion textQuestion)
        {

            var result = _textQuestionService.Create(textQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(TextQuestion textQuestion)
        {

            var result = _textQuestionService.Delete(textQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(TextQuestion textQuestion)
        {
            var result = _textQuestionService.Update(textQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
