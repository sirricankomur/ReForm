using Business.Abstract.Details;
using Entities.Details;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.Details
{
    [Route("api/[controller]")]
    [ApiController]
    public class MultipleChoiceDetailsController : ControllerBase
    {
        private IMultipleChoiceDetailService _multipleChoiceDetailService;

        public MultipleChoiceDetailsController(IMultipleChoiceDetailService multipleChoiceDetailService)
        {
            _multipleChoiceDetailService = multipleChoiceDetailService;
        }


        [HttpPost("create")]
        public IActionResult Create(MultipleChoiceDetail multipleChoiceDetail)
        {
            var result = _multipleChoiceDetailService.Create(multipleChoiceDetail);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(MultipleChoiceDetail multipleChoiceDetail)
        {
            var result = _multipleChoiceDetailService.Update(multipleChoiceDetail);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(MultipleChoiceDetail multipleChoiceDetail)
        {
            var result = _multipleChoiceDetailService.Delete(multipleChoiceDetail);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _multipleChoiceDetailService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getmultiplechoices")]
        public IActionResult GetMultipleChoices(int questionId)
        {
            var result = _multipleChoiceDetailService.GetMultipleChoices(questionId);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("getlastmultiplechoicedetail")]
        public IActionResult GetLastMultipleChoiceDetail()
        {
            var result = _multipleChoiceDetailService.GetLastMultipleChoiceDetail();
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getall")]
        public IActionResult GetAll(int id)
        {
            var result = _multipleChoiceDetailService.GetAll(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }
    }
}
