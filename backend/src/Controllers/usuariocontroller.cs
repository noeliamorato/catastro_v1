using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using control_archivos.Models;

namespace control_archivos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsuariosController(ApplicationDbContext context)
        {
            _context = context;
        }

        //-----------------------------------------------------------------------
        // GET: api/Usuarios/list
        // Lista todos los usuarios
        [HttpGet("list")]
        public async Task<IActionResult> GetAllUsers()
        {
            var usuarios = await _context.Usuario.ToListAsync();

            if (usuarios == null || !usuarios.Any())
            {
                return NotFound("No se encontraron usuarios");
            }

            return Ok(usuarios);
        }

        //-----------------------------------------------------------------------
        // GET: api/Usuarios/{id}
        // Obtiene un usuario por ID
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var usuario = await _context.Usuario.FindAsync(id);

            if (usuario == null)
            {
                return NotFound("Usuario no encontrado");
            }

            return Ok(usuario);
        }

        //-----------------------------------------------------------------------
        // POST: api/Usuarios/add
        // Agrega un nuevo usuario
        [HttpPost("add")]
        public async Task<IActionResult> AddUser([FromBody] Usuarios newUser)
        {
            if (newUser == null)
            {
                return BadRequest("Datos no válidos");
            }

            var existe = await _context.Usuario.AnyAsync(x => x.Username.Trim().ToLower() == newUser.Username.Trim().ToLower());
            if (existe)
            {
                return Conflict("Ya existe un usuario con ese nombre de usuario");
            }

            _context.Usuario.Add(newUser);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                return StatusCode(500, "Error al añadir usuario");
            }

            return CreatedAtAction(nameof(GetUser), new { id = newUser.IDUsuario }, newUser);
        }

        //-----------------------------------------------------------------------
        // PUT: api/Usuarios/edit/{id}
        // Edita un usuario por ID
        [HttpPut("edit/{id}")]
        public async Task<IActionResult> EditUser(int id, [FromBody] Usuarios updatedUser)
        {
            if (id != updatedUser.IDUsuario)
            {
                return BadRequest("El ID del usuario no coincide");
            }

            var usuario = await _context.Usuario.FindAsync(id);
            if (usuario == null)
            {
                return NotFound("Usuario no encontrado");
            }

            // Verificar si ya existe otro usuario con el mismo username (excluyendo el actual)
            var duplicado = await _context.Usuario
                .Where(x => x.IDUsuario != id)
                .AnyAsync(x => x.Username.Trim().ToLower() == updatedUser.Username.Trim().ToLower());

            if (duplicado)
            {
                return Conflict("Ya existe un usuario con ese nombre de usuario");
            }

            usuario.Nombre = updatedUser.Nombre;
            usuario.Appat = updatedUser.Appat;
            usuario.Apmat = updatedUser.Apmat;
            usuario.Estado = updatedUser.Estado;
            usuario.Username = updatedUser.Username;
            usuario.Password = updatedUser.Password;

            _context.Entry(usuario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                return StatusCode(500, "Error al actualizar usuario");
            }

            return NoContent();
        }

        //-----------------------------------------------------------------------
        // DELETE: api/Usuarios/delete/{id}
        // Elimina un usuario por ID
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var usuario = await _context.Usuario.FindAsync(id);

            if (usuario == null)
            {
                return NotFound("Usuario no encontrado");
            }

            _context.Usuario.Remove(usuario);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                return StatusCode(500, "Error al eliminar el usuario");
            }

            return NoContent();
        }

        //-----------------------------------------------------------------------
        // GET: api/Usuarios/verificacion/{usuario}/{password}
        // Verificación de usuario (autenticación)
        [HttpGet("verificacion/{usuario}/{password}")]
        public async Task<IActionResult> VerificarUsuario(string usuario, string password)
        {
            var usuarioDb = await _context.Usuario
                .Where(x => x.Username == usuario && x.Password == password)
                .FirstOrDefaultAsync();

            if (usuarioDb == null)
            {
                return Unauthorized(new { mensaje = "Credenciales incorrectas" });
            }

            if (usuarioDb.Estado.ToLower() == "inactivo")
            {
                return Unauthorized(new { mensaje = "Usuario deshabilitado" });
            }

            return Ok(usuarioDb);
        }
    }
}
