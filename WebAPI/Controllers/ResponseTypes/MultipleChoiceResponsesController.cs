using Business.Abstract.ResponseTypes;
using Entities.ResponseTypes;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.ResponseTypes
{
    [Route("api/[controller]")]
    [ApiController]
    public class MultipleChoiceResponsesController : ControllerBase
    {
        private readonly IMultipleChoiceResponseService _multipleChoiceResponseService;

        public MultipleChoiceResponsesController(IMultipleChoiceResponseService multipleChoiceResponseService)
        {
            _multipleChoiceResponseService = multipleChoiceResponseService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _multipleChoiceResponseService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(MultipleChoiceResponse multipleChoiceResponse)
        {

            var result = _multipleChoiceResponseService.Create(multipleChoiceResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(MultipleChoiceResponse multipleChoiceResponse)
        {

            var result = _multipleChoiceResponseService.Delete(multipleChoiceResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(MultipleChoiceResponse multipleChoiceResponse)
        {
            var result = _multipleChoiceResponseService.Update(multipleChoiceResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
