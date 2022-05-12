using Business.Abstract.ResponseTypes;
using Entities.ResponseTypes;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.ResponseTypes
{
    [Route("api/[controller]")]
    [ApiController]
    public class DateResponsesController : ControllerBase
    {
        private IDateResponseService _dateResponseService;

        public DateResponsesController(IDateResponseService dateResponseService)
        {
            _dateResponseService = dateResponseService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _dateResponseService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(DateResponse dateResponse)
        {

            var result = _dateResponseService.Create(dateResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(DateResponse dateResponse)
        {

            var result = _dateResponseService.Delete(dateResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(DateResponse dateResponse)
        {
            var result = _dateResponseService.Update(dateResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
