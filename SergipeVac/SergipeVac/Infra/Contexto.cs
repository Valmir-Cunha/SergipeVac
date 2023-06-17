using Microsoft.EntityFrameworkCore;
using SergipeVac.Model;

namespace SergipeVac.Infra
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {
        }

        public DbSet<DocumentoImportadoCSV> DocumentoImportadoCSV { get; set;}
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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DocumentoVacinacao>(entity =>
            {
                entity.HasOne(c => c.Vacina)
                      .WithMany()
                      .HasForeignKey(c => c.VacinaId);
                
                entity.HasOne(c => c.Paciente)
                      .WithMany()
                      .HasForeignKey(c => c.PacienteId);
                
                entity.HasOne(c => c.Estabelecimento)
                      .WithMany()
                      .HasForeignKey(c => c.EstabelecimentoId);
                
                entity.HasOne(c => c.SistemaOrigem)
                      .WithMany()
                      .HasForeignKey(c => c.SistemaOrigemId);
            });
            
            modelBuilder.Entity<Endereco>(entity =>
            {
                entity.HasOne(c => c.Municipio)
                      .WithMany()
                      .HasForeignKey(c => c.MunicipioId);
            });
            
            modelBuilder.Entity<Estabelecimento>(entity =>
            {
                entity.HasOne(c => c.Municipio)
                      .WithMany()
                      .HasForeignKey(c => c.MunicipioId);
            });  
            
            modelBuilder.Entity<Municipio>(entity =>
            {
                entity.HasOne(c => c.Pais)
                      .WithMany()
                      .HasForeignKey(c => c.PaisId);
            });

            modelBuilder.Entity<Paciente>(entity =>
            {
                entity.HasOne(c => c.SexoBiologico)
                      .WithMany()
                      .HasForeignKey(c => c.SexoBiologicoId);

                entity.HasOne(c => c.Raca)
                      .WithMany()
                      .HasForeignKey(c => c.RacaId);

                entity.HasOne(c => c.Endereco)
                      .WithMany()
                      .HasForeignKey(c => c.EnderecoId);

                entity.HasOne(c => c.Nacionalidade)
                      .WithMany()
                      .HasForeignKey(c => c.NacionalidadeId);
            });           
            
            modelBuilder.Entity<Vacina>(entity =>
            {
                entity.HasOne(c => c.GrupoAtendimento)
                      .WithMany()
                      .HasForeignKey(c => c.GrupoAtendimentoId);

                entity.HasOne(c => c.Categoria)
                      .WithMany()
                      .HasForeignKey(c => c.CategoriaId);

                entity.HasOne(c => c.Fabricante)
                      .WithMany()
                      .HasForeignKey(c => c.FabricanteId);
            });
        }
    }
}
