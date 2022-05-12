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
    public class YesNoQuestionsController : ControllerBase
    {
        private readonly IYesNoQuestionService _yesNoQuestionService;

        public YesNoQuestionsController(IYesNoQuestionService yesNoQuestionService)
        {
            _yesNoQuestionService = yesNoQuestionService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _yesNoQuestionService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(YesNoQuestion yesNoQuestion)
        {

            var result = _yesNoQuestionService.Create(yesNoQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(YesNoQuestion yesNoQuestion)
        {

            var result = _yesNoQuestionService.Delete(yesNoQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(YesNoQuestion yesNoQuestion)
        {
            var result = _yesNoQuestionService.Update(yesNoQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
