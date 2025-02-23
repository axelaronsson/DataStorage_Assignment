using System.ComponentModel.DataAnnotations.Schema;
using Data.Entities;

namespace Business.Dtos;

public class ProjectUpdateForm
{
    public int Id { get; set; }
    public string ProjectId { get; set; } = null!;
    public string Title { get; set; } = null!;

    [Column(TypeName = "date")]
    public DateTime StartDate { get; set; }

    [Column(TypeName = "date")]
    public DateTime EndDate { get; set; }


    //public int CustomerId { get; set; }
    public CustomerEntity Customer { get; set; } = null!;

    public string Status { get; set; } = null!;

    public string UserFirstName { get; set; } = null!;
    public string UserLastName { get; set; } = null!;
    public string UserEmail { get; set; } = null!;

    public string ProductName { get; set; } = null!;
    public int ProductPrice { get; set; }
    public int TotalPrice { get; set; }
}
