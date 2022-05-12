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
    public class OpinionScaleQuestionsController : ControllerBase
    {
        private readonly IOpinionScaleQuestionService _opinionScaleQuestionService;

        public OpinionScaleQuestionsController(IOpinionScaleQuestionService opinionScaleQuestionService)
        {
            _opinionScaleQuestionService = opinionScaleQuestionService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _opinionScaleQuestionService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(OpinionScaleQuestion opinionScaleQuestion)
        {

            var result = _opinionScaleQuestionService.Create(opinionScaleQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(OpinionScaleQuestion opinionScaleQuestion)
        {

            var result = _opinionScaleQuestionService.Delete(opinionScaleQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(OpinionScaleQuestion opinionScaleQuestion)
        {
            var result = _opinionScaleQuestionService.Update(opinionScaleQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
