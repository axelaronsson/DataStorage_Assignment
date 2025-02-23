using Business.Interfaces;
using Data.Contexts;
using Data.Entities;

namespace Business.Service;

public class CustomerService(DataContext context) : ICustomerService
{
    private readonly DataContext _context = context;

    public CustomerEntity CreateCustomer(string name)
    {
        var customerEntity = _context.Customers.FirstOrDefault(x => x.CustomerName == name);
        if (customerEntity == null)
        {
            customerEntity = new CustomerEntity();
            customerEntity!.CustomerName = name;
            _context.Customers.Add(customerEntity);
            _context.SaveChanges();

        }

        return customerEntity;
    }
}
