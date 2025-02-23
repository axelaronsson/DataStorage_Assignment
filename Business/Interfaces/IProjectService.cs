using System.Linq.Expressions;
using Business.Dtos;
using Data.Entities;

namespace Business.Interfaces
{
    public interface IProjectService
    {
        ProjectEntity CreateProject(ProjectRegistrationForm form);
        IEnumerable<ProjectEntity> GetAllProjects();
        ProjectEntity GetProject(Expression<Func<ProjectEntity, bool>> expression);
        ProjectEntity UpdateProject(ProjectUpdateForm form);
    }
}