using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Colegio.Model
{
    public class Alumnos
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string apellidos { get; set; }
        public int telefono { get; set; }
        public string sexo { get; set; }
        public string nacimiento { get; set; }
    }
}
