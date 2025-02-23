using Business.Dtos;
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

        var projectEntity = new ProjectEntity
        {
            Title = form.Title,
            StartDate = form.StartDate,
            EndDate = form.EndDate,
            Customer = customerEntity,
            Status = form.Status,
            UserFirstName = form.UserFirstName,
            UserLastName = form.UserLastName,
            UserEmail = form.UserEmail,
            ProductName = form.ProductName,
            ProductPrice = form.ProductPrice,
            TotalPrice = form.TotalPrice,
        };
        // var entity = await _productRepository.GetAsync(x => x.Name == form.Name);
        var entity = _projectRepository.Create(projectEntity);

        return entity;
    }

    public IEnumerable<ProjectEntity> GetAllProjects()
    {
        return _projectRepository.GetAll();
    }
}
