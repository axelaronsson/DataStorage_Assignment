using Business.Dtos;
using Business.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.WebApi.Controllers
{
    [Route("api/projects")]
    [ApiController]
    public class ProjectController(IProjectService projectService) : ControllerBase
    {
        private readonly IProjectService _projectService = projectService;

        [EnableCors("CorsPolicy")]
        [HttpPost]
        public IActionResult Create(ProjectRegistrationForm form)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var result = _projectService.CreateProject(form);
            return Ok(result);
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var result = _projectService.GetAllProjects();
            return Ok(result);
        }
    }
}
