using Business.Dtos;
using Data.Entities;

namespace Business.Factories;

public static class ProjectFactory
{
    public static ProjectEntity Create(ProjectRegistrationForm form, string projectId, CustomerEntity customerEntity) => new()
    {
        Title = form.Title,
        ProjectId = projectId,
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

    public static ProjectEntity Create(ProjectUpdateForm form, CustomerEntity customerEntity) => new()
    {
        Id = form.Id,
        ProjectId = form.ProjectId,
        Title = form.Title,
        StartDate = form.StartDate,
        EndDate = form.EndDate,
        CustomerId = customerEntity.Id,
        Customer = customerEntity,
        Status = form.Status,
        UserFirstName = form.UserFirstName,
        UserLastName = form.UserLastName,
        UserEmail = form.UserEmail,
        ProductName = form.ProductName,
        ProductPrice = form.ProductPrice,
        TotalPrice = form.TotalPrice,
    };
}
