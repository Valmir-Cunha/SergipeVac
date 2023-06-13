using Microsoft.EntityFrameworkCore;
using SergipeVac.Model;

namespace SergipeVac.Infra
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions options) : base()
        {
        }

        public DbSet<Categoria> Categorias { get; set;}
        public DbSet<DocumentoVacinacao> DocumentosVacinacao { get; set;}
        public DbSet<Endereco> Enderecos { get; set;}
        public DbSet<Estabelecimento> Estabelecimentos{ get; set;}
        public DbSet<Fabricante> Fabricantes { get; set; }
        public DbSet<GrupoAtendimento> GruposAtendimento { get; set;}
        public DbSet<Municipio> Municipios { get; set;}
        public DbSet<Nacionalidade> Nacionalidades { get; set;}
        public DbSet<Paciente> Pacientes { get; set;}
        public DbSet<Pais> Paises { get; set;}
        public DbSet<Raca> Racas { get; set;}
        public DbSet<SexoBiologico> SexoBiologico { get; set;}
        public DbSet<Sistema> Sistemas { get; set;}
        public DbSet<Vacina> Vacinas{ get; set;}

    }
}
