using Business.Abstract.Intermediate;
using Entities.Intermediate;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.Intermediate
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormUsersController : ControllerBase
    {
        private IFormUserService _formUserService;

        public FormUsersController(IFormUserService formUserService)
        {
            _formUserService = formUserService;
        }


        [HttpPost("create")]
        public IActionResult Create(FormUser formUser)
        {
            var result = _formUserService.Create(formUser);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(FormUser formUser)
        {
            var result = _formUserService.Update(formUser);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(FormUser formUser)
        {
            var result = _formUserService.Delete(formUser);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("getallbyformid")]
        public IActionResult GetAllByFormId(int formId)
        {
            var result = _formUserService.GetAllByFormId(formId);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getallbyuserid")]
        public IActionResult GetAllByUserId(int userId)
        {
            var result = _formUserService.GetAllByUserId(userId);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var result = _formUserService.GetAll();
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }
    }
}
