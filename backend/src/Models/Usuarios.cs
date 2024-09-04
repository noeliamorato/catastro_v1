using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace control_archivos.Models
{
    [Table("Usuario")]
    public class Usuarios
    {
        [Key, Required]
        public int IDUsuario { get; set; }
        public string Nombre { get; set; }
        public string Appat { get; set; }
        public string Apmat { get; set; }
        public string Estado {  get; set; }
        public string Username {get; set; }
        public string Password {get; set; }
    }
}
