using Data.Entities;

namespace Data.Interfaces
{
    public interface IProjectRepository
    {
        ProjectEntity Create(ProjectEntity entity);
        IEnumerable<ProjectEntity> GetAll();
    }
}