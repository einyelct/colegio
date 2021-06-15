using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API_Colegio.Model;

namespace API_Colegio.Data
{
    public class API_ColegioContext : DbContext
    {
        public API_ColegioContext (DbContextOptions<API_ColegioContext> options)
            : base(options)
        {
        }

        public DbSet<API_Colegio.Model.Alumnos> Alumnos { get; set; }
    }
}
