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
            if (ModelState.IsValid)
            {
                var result = _projectService.CreateProject(form);
                if (result != null)
                    return Ok(result);
            }

            return BadRequest();
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var result = _projectService.GetAllProjects();
            return Ok(result);
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("Get")]
        public IActionResult Get([FromQuery(Name = "projectId")] string projectId)
        {
            var result = _projectService.GetProject(x => x.Id == Convert.ToInt32(projectId));

            if (result != null)
                return Ok(result);

            return BadRequest();
        }

        [EnableCors("CorsPolicy")]
        [HttpPut]
        public IActionResult Update(ProjectUpdateForm form)
        {
            var result = _projectService.UpdateProject(form);
            if (result != null)
                return Ok(result);
            
            return BadRequest();
        }
    }
}
