using Business.Abstract.Details;
using Entities.Details;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.Details
{
    [Route("api/[controller]")]
    [ApiController]
    public class RankingDetailsController : ControllerBase
    {
        private IRankingDetailService _rankingDetailService;

        public RankingDetailsController(IRankingDetailService rankingDetailService)
        {
            _rankingDetailService = rankingDetailService;
        }


        [HttpPost("create")]
        public IActionResult Create(RankingDetail rankingDetail)
        {
            var result = _rankingDetailService.Create(rankingDetail);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(RankingDetail rankingDetail)
        {
            var result = _rankingDetailService.Update(rankingDetail);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(RankingDetail rankingDetail)
        {
            var result = _rankingDetailService.Delete(rankingDetail);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _rankingDetailService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getrankingchoices")]
        public IActionResult GetRankingChoices(int questionId)
        {
            var result = _rankingDetailService.GetRankingChoices(questionId);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
