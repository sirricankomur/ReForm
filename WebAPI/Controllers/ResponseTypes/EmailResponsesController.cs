using Business.Abstract.ResponseTypes;
using Entities.ResponseTypes;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.ResponseTypes
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailResponsesController : ControllerBase
    {
        private readonly IEmailResponseService _emailResponseService;

        public EmailResponsesController(IEmailResponseService emailResponseService)
        {
            _emailResponseService = emailResponseService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _emailResponseService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(EmailResponse emailResponse)
        {

            var result = _emailResponseService.Create(emailResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(EmailResponse emailResponse)
        {

            var result = _emailResponseService.Delete(emailResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(EmailResponse emailResponse)
        {
            var result = _emailResponseService.Update(emailResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
