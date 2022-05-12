using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business.Abstract.QuestionTypes;
using Entities.QuestionTypes;

namespace WebAPI.Controllers.QuestionTypes
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhoneNumberQuestionsController : ControllerBase
    {
        private readonly IPhoneNumberQuestionService _phoneNumberQuestionService;

        public PhoneNumberQuestionsController(IPhoneNumberQuestionService phoneNumberQuestionService)
        {
            _phoneNumberQuestionService = phoneNumberQuestionService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _phoneNumberQuestionService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(PhoneNumberQuestion phoneNumberQuestion)
        {

            var result = _phoneNumberQuestionService.Create(phoneNumberQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(PhoneNumberQuestion phoneNumberQuestion)
        {

            var result = _phoneNumberQuestionService.Delete(phoneNumberQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(PhoneNumberQuestion phoneNumberQuestion)
        {
            var result = _phoneNumberQuestionService.Update(phoneNumberQuestion);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
