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
    public class EmailQuestionsController : ControllerBase
    {
        private readonly IEmailQuestionService _emailQuestionService;

        public EmailQuestionsController(IEmailQuestionService emailQuestionService)
        {
            _emailQuestionService = emailQuestionService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _emailQuestionService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(EmailQuestion emailQuestion)
        {

            var result = _emailQuestionService.Create(emailQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(EmailQuestion emailQuestion)
        {

            var result = _emailQuestionService.Delete(emailQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(EmailQuestion emailQuestion)
        {
            var result = _emailQuestionService.Update(emailQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
