using Business.Abstract.ResponseTypes;
using Entities.ResponseTypes;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.ResponseTypes
{
    [Route("api/[controller]")]
    [ApiController]
    public class NumberResponsesController : ControllerBase
    {
        private readonly INumberResponseService _numberResponseService;

        public NumberResponsesController(INumberResponseService numberResponseService)
        {
            _numberResponseService = numberResponseService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _numberResponseService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(NumberResponse numberResponse)
        {

            var result = _numberResponseService.Create(numberResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(NumberResponse numberResponse)
        {

            var result = _numberResponseService.Delete(numberResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(NumberResponse numberResponse)
        {
            var result = _numberResponseService.Update(numberResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
