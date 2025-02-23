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
        // CheckIfCustomerExists - Görs redan i repositoryt??
        var customerEntity = _customerRepository.Create(name);
        return customerEntity;
    }

    public CustomerEntity CheckIfCustomerExists(string name)
    {
        //var customerEntity = _customerRepository.Get();
        //return customerEntity;
        return new CustomerEntity();
    }
}
