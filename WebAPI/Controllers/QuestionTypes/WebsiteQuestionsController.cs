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
    public class WebsiteQuestionsController : ControllerBase
    {
        private readonly IWebsiteQuestionService _websiteQuestionService;

        public WebsiteQuestionsController(IWebsiteQuestionService websiteQuestionService)
        {
            _websiteQuestionService = websiteQuestionService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _websiteQuestionService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(WebsiteQuestion websiteQuestion)
        {

            var result = _websiteQuestionService.Create(websiteQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(WebsiteQuestion websiteQuestion)
        {

            var result = _websiteQuestionService.Delete(websiteQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(WebsiteQuestion websiteQuestion)
        {
            var result = _websiteQuestionService.Update(websiteQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
