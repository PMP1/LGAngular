using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LGAngular.Models
{
    public class Employee
    {
        public Employee(int id, string firstName, string lastName, int age)
        {
            EmployeeId = id;
            FirstName = firstName;
            LastName = lastName;
            Age = age;
        }

        public int EmployeeId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int Age { get; set; }

    }
}