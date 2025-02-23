using System.Linq.Expressions;
using Business.Dtos;
using Business.Factories;
using Business.Interfaces;
using Data.Contexts;
using Data.Entities;
using Data.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Business.Service;

public class ProjectService(IProjectRepository projectRepository, ICustomerService customerService) : IProjectService
{
    private readonly IProjectRepository _projectRepository = projectRepository;
    //private readonly DataContext _context = context;
    private readonly ICustomerService _customerService = customerService;

    public ProjectEntity CreateProject(ProjectRegistrationForm form)
    {
        var customerEntity = _customerService.CreateCustomer(form.CustomerName);

        // var entity = _projectRepository.Get(x => x.Name == form.Name);
        var lastId = 1;
        if (_projectRepository.GetLast() != null)
        {
            lastId = _projectRepository.GetLast().Id + 1;
        }
        var projectId = "P-" + lastId.ToString();
        var entity = _projectRepository.Create(ProjectFactory.Create(form, projectId, customerEntity));

        return entity;
    }

    public IEnumerable<ProjectEntity> GetAllProjects()
    {
        return _projectRepository.GetAll();
    }

    public ProjectEntity GetProject(Expression<Func<ProjectEntity, bool>> expression)
    {
        var entity = _projectRepository.Get(expression);
        //var project = ProjectFactory()
        return entity ?? null!;
    }

    public ProjectEntity UpdateProject(ProjectUpdateForm projectUpdateForm)
    {
        var existingCustomer = _customerService.CreateCustomer(projectUpdateForm.Customer.CustomerName);
        var entity = _projectRepository.Update(ProjectFactory.Create(projectUpdateForm, existingCustomer));
        return entity;
        //var product = ProjectFactory.Create(entity);
        //return product ?? null!;
    }
}
