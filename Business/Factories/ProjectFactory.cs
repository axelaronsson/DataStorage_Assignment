using Business.Dtos;
using Data.Entities;

namespace Business.Factories;

public static class ProjectFactory
{
    public static ProjectEntity Create(ProjectRegistrationForm form, CustomerEntity customerEntity) => new()
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

    public static ProjectEntity Create(ProjectUpdateForm form) => new()
    {
        Id = form.Id,
        Title = form.Title,
        StartDate = form.StartDate,
        EndDate = form.EndDate,
        //CustomerId = form.CustomerId,
        //Customer = form.Customer,
        Status = form.Status,
        UserFirstName = form.UserFirstName,
        UserLastName = form.UserLastName,
        UserEmail = form.UserEmail,
        ProductName = form.ProductName,
        ProductPrice = form.ProductPrice,
        TotalPrice = form.TotalPrice,
    };
}
