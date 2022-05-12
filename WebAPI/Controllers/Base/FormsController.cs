using Business.Abstract.Base;
using Entities.Base;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.Base
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormsController : ControllerBase
    {
        readonly IFormService _formService;

        public FormsController(IFormService formService)
        {
            _formService = formService;
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var result = _formService.GetAll();
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("getforms")]
        public IActionResult GetForms(int userId)
        {
            var result = _formService.GetAllByUserId(userId);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("getquestionnumber")]
        public IActionResult GetQuestionNumber(int formId)
        {
            var result = _formService.GetQuestionNumber(formId);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int formId)
        {
            var result = _formService.GetById(formId);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getlastform")]
        public IActionResult GetLastForm()
        {
            var result = _formService.GetLastForm();
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(Form form)
        {
            var result = _formService.Create(form);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(Form form)
        {
            var result = _formService.Delete(form);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(Form form)
        {
            var result = _formService.Update(form);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }
    }

}
