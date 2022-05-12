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
    public class RankingQuestionsController : ControllerBase
    {
        private readonly IRankingQuestionService _rankingQuestionService;

        public RankingQuestionsController(IRankingQuestionService rankingQuestionService)
        {
            _rankingQuestionService = rankingQuestionService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _rankingQuestionService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(RankingQuestion rankingQuestion)
        {

            var result = _rankingQuestionService.Create(rankingQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(RankingQuestion rankingQuestion)
        {

            var result = _rankingQuestionService.Delete(rankingQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(RankingQuestion rankingQuestion)
        {
            var result = _rankingQuestionService.Update(rankingQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
