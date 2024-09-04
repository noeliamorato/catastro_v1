using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace control_archivos
{
    [Table("roles")]
    public class Roles
    {
        [Key, Required]
        public int Id { get; set; }
        public string Nombre_rol { get; set; }
        
    }
}
