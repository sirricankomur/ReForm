using Business.Abstract.ResponseTypes;
using Entities.ResponseTypes;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers.ResponseTypes
{
    [Route("api/[controller]")]
    [ApiController]
    public class WebsiteResponsesController : ControllerBase
    {
        private readonly IWebsiteResponseService _websiteResponseService;

        public WebsiteResponsesController(IWebsiteResponseService websiteResponseService)
        {
            _websiteResponseService = websiteResponseService;
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _websiteResponseService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("create")]
        public IActionResult Create(WebsiteResponse websiteResponse)
        {

            var result = _websiteResponseService.Create(websiteResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(WebsiteResponse websiteResponse)
        {

            var result = _websiteResponseService.Delete(websiteResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(WebsiteResponse websiteResponse)
        {
            var result = _websiteResponseService.Update(websiteResponse);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
