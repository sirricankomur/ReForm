using Business.Abstract.ResponseTypes;
using Entities.ResponseTypes;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.ResponseTypes
{
    [Route("api/[controller]")]
    [ApiController]
    public class RankingResponsesController : ControllerBase
    {
        private readonly IRankingResponseService _rankingResponseService;

        public RankingResponsesController(IRankingResponseService rankingResponseService)
        {
            _rankingResponseService = rankingResponseService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _rankingResponseService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(RankingResponse rankingResponse)
        {

            var result = _rankingResponseService.Create(rankingResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(RankingResponse rankingResponse)
        {

            var result = _rankingResponseService.Delete(rankingResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(RankingResponse rankingResponse)
        {
            var result = _rankingResponseService.Update(rankingResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
