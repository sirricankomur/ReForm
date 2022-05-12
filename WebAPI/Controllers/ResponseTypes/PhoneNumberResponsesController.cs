using Business.Abstract.ResponseTypes;
using Entities.ResponseTypes;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.ResponseTypes
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhoneNumberResponsesController : ControllerBase
    {
        private readonly IPhoneNumberResponseService _phoneNumberResponseService;

        public PhoneNumberResponsesController(IPhoneNumberResponseService phoneNumberResponseService)
        {
            _phoneNumberResponseService = phoneNumberResponseService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _phoneNumberResponseService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(PhoneNumberResponse phoneNumberResponse)
        {

            var result = _phoneNumberResponseService.Create(phoneNumberResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(PhoneNumberResponse phoneNumberResponse)
        {

            var result = _phoneNumberResponseService.Delete(phoneNumberResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(PhoneNumberResponse phoneNumberResponse)
        {
            var result = _phoneNumberResponseService.Update(phoneNumberResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
