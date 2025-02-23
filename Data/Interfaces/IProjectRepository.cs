using System.Linq.Expressions;
using Data.Entities;

namespace Data.Interfaces
{
    public interface IProjectRepository
    {
        ProjectEntity Create(ProjectEntity entity);
        IEnumerable<ProjectEntity> GetAll();
        ProjectEntity Get(Expression<Func<ProjectEntity, bool>> expression);
        ProjectEntity Update(ProjectEntity entity);
        ProjectEntity GetLast();
    }
}