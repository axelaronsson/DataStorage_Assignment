using Business.Interfaces;
using Data.Contexts;
using Data.Entities;
using Data.Interfaces;

namespace Business.Service;

public class CustomerService(ICustomerRepository customerRepository) : ICustomerService
{
    private readonly ICustomerRepository _customerRepository = customerRepository;

    public CustomerEntity CreateCustomer(string name)
    {
        var customerEntity = _customerRepository.Create(name);
        return customerEntity;
    }
}
