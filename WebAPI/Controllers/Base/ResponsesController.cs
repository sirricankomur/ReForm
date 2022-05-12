using Business.Abstract.Base;
using Entities.Base;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.Base
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResponsesController : ControllerBase
    {
        private IResponseService _responseService;

        public ResponsesController(IResponseService responseService)
        {
            _responseService = responseService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _responseService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getallbyformid")]
        public IActionResult GetAllByFormId(int formId)
        {
            var result = _responseService.GetById(formId);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getlastresponse")]
        public IActionResult GetLastResponse()
        {
            var result = _responseService.GetLastResponse();
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getlastresponses")]
        public IActionResult GetLastResponses(int limit)
        {
            var result = _responseService.GetLastResponses(limit);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(Response response)
        {
            var result = _responseService.Create(response);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(Response response)
        {
            var result = _responseService.Update(response);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(Response response)
        {
            var result = _responseService.Delete(response);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }


    }
}

