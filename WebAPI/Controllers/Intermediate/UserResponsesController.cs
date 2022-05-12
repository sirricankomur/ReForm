using Business.Abstract.Intermediate;
using Entities.Intermediate;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.Intermediate
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserResponsesController : ControllerBase
    {
        private IUserResponseService _userResponseService;

        public UserResponsesController(IUserResponseService userResponseService)
        {
            _userResponseService = userResponseService;
        }

        [HttpPost("create")]
        public IActionResult Create(UserResponse userResponse)
        {
            var result = _userResponseService.Create(userResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
