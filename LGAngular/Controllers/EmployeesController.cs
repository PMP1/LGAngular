using LGAngular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace LGAngular.Controllers
{
    public class EmployeesController: ApiController
    {

        private static List<Employee> Employees = new List<Employee>()
        {
            new Employee(1, "Kieran", "", 29),
            new Employee(2, "Dave", "", 28),
            new Employee(3, "Steve", "", 27),
            new Employee(4, "Jason", "", 26),
            new Employee(5, "Katie", "", 25),
            new Employee(6, "Daisy", "", 24),
            new Employee(7, "Marie", "", 23),
            new Employee(8, "Jane", "", 22),
            new Employee(9, "Rose", "", 21),
            new Employee(10, "Poppy", "", 20)
        };

        public IHttpActionResult Get()
        {
            var result = Employees;

            return Ok(result);

        }

        public IHttpActionResult Get(int id)
        {
            var result = Employees.Single(e => e.EmployeeId == id);

            return Ok(result);

        }

    }
}