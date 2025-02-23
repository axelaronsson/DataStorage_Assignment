using Business.Dtos;
using Data.Entities;

namespace Business.Interfaces
{
    public interface IProjectService
    {
        ProjectEntity CreateProject(ProjectRegistrationForm form);
        IEnumerable<ProjectEntity> GetAllProjects();
    }
}