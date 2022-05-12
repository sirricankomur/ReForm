using Business.Abstract.ResponseTypes;
using Entities.ResponseTypes;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.ResponseTypes
{
    [Route("api/[controller]")]
    [ApiController]
    public class OpinionScaleResponsesController : ControllerBase
    {
        private readonly IOpinionScaleResponseService _opinionScaleResponseService;

        public OpinionScaleResponsesController(IOpinionScaleResponseService opinionScaleResponseService)
        {
            _opinionScaleResponseService = opinionScaleResponseService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _opinionScaleResponseService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(OpinionScaleResponse opinionScaleResponse)
        {

            var result = _opinionScaleResponseService.Create(opinionScaleResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(OpinionScaleResponse opinionScaleResponse)
        {

            var result = _opinionScaleResponseService.Delete(opinionScaleResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(OpinionScaleResponse opinionScaleResponse)
        {
            var result = _opinionScaleResponseService.Update(opinionScaleResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
