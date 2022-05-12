using Business.Abstract.Intermediate;
using Entities.Intermediate;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.Intermediate
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserFormsController : ControllerBase
    {
        private IUserFormService _userFormService;

        public UserFormsController(IUserFormService userFormService)
        {
            _userFormService = userFormService;
        }

        [HttpPost("create")]
        public IActionResult Create(UserForm userForm)
        {
            var result = _userFormService.AddUserForm(userForm);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
