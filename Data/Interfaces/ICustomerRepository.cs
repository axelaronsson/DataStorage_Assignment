using Data.Entities;

namespace Data.Interfaces
{
    public interface ICustomerRepository
    {
        CustomerEntity Create(string name);
    }
}