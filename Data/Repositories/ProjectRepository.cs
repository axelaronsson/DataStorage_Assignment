using System.Diagnostics;
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
}
