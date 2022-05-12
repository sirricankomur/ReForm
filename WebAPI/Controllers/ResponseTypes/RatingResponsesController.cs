using Business.Abstract.ResponseTypes;
using Entities.ResponseTypes;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.ResponseTypes
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatingResponsesController : ControllerBase
    {
        private readonly IRatingResponseService _ratingResponseService;

        public RatingResponsesController(IRatingResponseService ratingResponseService)
        {
            _ratingResponseService = ratingResponseService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _ratingResponseService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(RatingResponse ratingResponse)
        {

            var result = _ratingResponseService.Create(ratingResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(RatingResponse ratingResponse)
        {

            var result = _ratingResponseService.Delete(ratingResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(RatingResponse ratingResponse)
        {
            var result = _ratingResponseService.Update(ratingResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
