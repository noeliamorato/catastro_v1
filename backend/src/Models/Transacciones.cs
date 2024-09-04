using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace control_archivos
{
    [Table("Transaccion")]
    public class Transacciones
    {
        [Key, Required]
        public int IDTransaccion { get; set; }
        public int IDUsuario { get; set; }
        public int IDTipoTransaccion { get; set; }
        public string Transaccion { get; set; }
        public string Fecha { get; set; }
    }
}
