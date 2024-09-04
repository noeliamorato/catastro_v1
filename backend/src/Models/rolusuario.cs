using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace control_archivos.Models
{
    [Table("rol_usuarios")]
    public class rolusuario
    {
        [Key, Required]
        public int id { get; set; }
        public string id_rol { get; set; }
        public bool habilitado { get; set; }
        public int id_usuario { get; set; }

    }
}
