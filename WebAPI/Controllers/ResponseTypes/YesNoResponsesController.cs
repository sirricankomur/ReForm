using Business.Abstract.ResponseTypes;
using Entities.ResponseTypes;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.ResponseTypes
{
    [Route("api/[controller]")]
    [ApiController]
    public class YesNoResponsesController : ControllerBase
    {
        private readonly IYesNoResponseService _yesNoResponseService;

        public YesNoResponsesController(IYesNoResponseService yesNoResponseService)
        {
            _yesNoResponseService = yesNoResponseService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _yesNoResponseService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(YesNoResponse yesNoResponse)
        {

            var result = _yesNoResponseService.Create(yesNoResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(YesNoResponse yesNoResponse)
        {

            var result = _yesNoResponseService.Delete(yesNoResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(YesNoResponse yesNoResponse)
        {
            var result = _yesNoResponseService.Update(yesNoResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
