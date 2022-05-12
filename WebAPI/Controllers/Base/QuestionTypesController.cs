using Business.Abstract.Base;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.Base
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionTypesController : ControllerBase
    {
        private readonly IQuestionTypeService _questionTypeService;

        public QuestionTypesController(IQuestionTypeService questionTypeService)
        {
            _questionTypeService = questionTypeService;
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var result = _questionTypeService.GetAll();
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);

        }
    }
}
