﻿using System.ComponentModel.DataAnnotations.Schema;

namespace Business.Dtos;

public class ProjectRegistrationForm
{
    public string Title { get; set; } = null!;

    [Column(TypeName = "date")]
    public DateTime StartDate { get; set; }

    [Column(TypeName = "date")]
    public DateTime EndDate { get; set; }

    public string CustomerName { get; set; } = null!;

    public string Status { get; set; } = null!;

    public string UserFirstName { get; set; } = null!;
    public string UserLastName { get; set; } = null!;
    public string UserEmail { get; set; } = null!;

    public string ProductName { get; set; } = null!;
    public int ProductPrice { get; set; }
    public int TotalPrice { get; set; }
}
