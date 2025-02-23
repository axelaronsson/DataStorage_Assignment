using System.Diagnostics;
using System.Linq.Expressions;
using Data.Contexts;
using Data.Entities;
using Data.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Data.Repositories;

public class ProjectRepository(DataContext context) : IProjectRepository
{
    private readonly DataContext _context = context;

    public ProjectEntity Create(ProjectEntity entity)
    {
        if (entity == null)
            return null!;
        try
        {
            _context.Projects.Add(entity);
            _context.SaveChanges();
            return entity;
        }
        catch (Exception ex)
        {
            Debug.WriteLine($"Error creating project :: {ex.Message}");
            return null!;
        }
    }

    public IEnumerable<ProjectEntity> GetAll()
    {
        return _context.Projects.Include(x => x.Customer).ToList();
    }

    public ProjectEntity Get(Expression<Func<ProjectEntity, bool>> expression)
    {
        if (expression == null)
            return null!;
        return _context.Projects.Include(x => x.Customer).FirstOrDefault(expression) ?? null!;
    }

    public ProjectEntity Update(ProjectEntity updatedEntity)
    {
        if (updatedEntity == null)
            return null!;
        try
        {
            var existingEntity = Get(x => x.Id == updatedEntity.Id);
            if (existingEntity == null)
                return null!;

            _context.Entry(existingEntity).CurrentValues.SetValues(updatedEntity);
            _context.SaveChanges();
            return existingEntity;
        }
        catch (Exception ex)
        {
            Debug.WriteLine($"Error updating project entity :: {ex.Message}");
            return null!;
        }
    }
}
