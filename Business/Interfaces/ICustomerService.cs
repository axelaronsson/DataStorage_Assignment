using Data.Entities;

namespace Business.Interfaces
{
    public interface ICustomerService
    {
        CustomerEntity CreateCustomer(string name);
    }
}