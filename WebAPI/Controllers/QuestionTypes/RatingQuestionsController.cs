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
    public class RatingQuestionsController : ControllerBase
    {
        private readonly IRatingQuestionService _ratingQuestionService;

        public RatingQuestionsController(IRatingQuestionService ratingQuestionService)
        {
            _ratingQuestionService = ratingQuestionService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _ratingQuestionService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(RatingQuestion ratingQuestion)
        {

            var result = _ratingQuestionService.Create(ratingQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(RatingQuestion ratingQuestion)
        {

            var result = _ratingQuestionService.Delete(ratingQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(RatingQuestion ratingQuestion)
        {
            var result = _ratingQuestionService.Update(ratingQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
