using System.Diagnostics;
using Data.Contexts;
using Data.Entities;
using Data.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Data.Repositories;

public class CustomerRepository(DataContext context) : ICustomerRepository
{
    private readonly DataContext _context = context;

    public CustomerEntity Create(string name)
    {
        var customerEntity = _context.Customers.FirstOrDefault(x => x.CustomerName == name);
        if (customerEntity == null)
        {
            try
            {
                customerEntity = new CustomerEntity();
                customerEntity!.CustomerName = name;
                _context.Customers.Add(customerEntity);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                Debug.WriteLine($"Error creating customer :: {ex.Message}");
                return null!;
            }
        }
        return customerEntity;
    }
}
