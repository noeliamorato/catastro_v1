using control_archivos.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace control_archivos
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseSerialColumns();
        }

        public DbSet<rolusuario> RolUsuario { get; set; }
        public DbSet<Usuarios> Usuario { get; set; }
        public DbSet<Roles> Rol { get; set; }
        public DbSet<Transacciones> Transaccion { get; set; }
    }
}
