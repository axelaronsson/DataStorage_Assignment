using Business.Dtos;
using Business.Interfaces;
using Data.Contexts;
using Data.Entities;

namespace Business.Service;

public class ProjectService(DataContext context, ICustomerService customerService) : IProjectService
{
    private readonly DataContext _context = context;
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

        _context.Projects.Add(projectEntity);
        _context.SaveChanges();

        return projectEntity;
    }
}
