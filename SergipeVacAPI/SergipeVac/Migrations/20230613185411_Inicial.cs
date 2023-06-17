using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace SergipeVacAPI.Migrations
{
    /// <inheritdoc />
    public partial class Inicial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categorias",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nome = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categorias", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Fabricantes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Referencia = table.Column<int>(type: "integer", nullable: false),
                    Nome = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fabricantes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GruposAtendimento",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nome = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GruposAtendimento", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Nacionalidades",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Valor = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nacionalidades", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Paises",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nome = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Paises", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Racas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Valor = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Racas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SexoBiologico",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Valor = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SexoBiologico", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Sistemas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nome = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sistemas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Vacinas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    GrupoAtendimentoId = table.Column<int>(type: "integer", nullable: false),
                    CategoriaId = table.Column<int>(type: "integer", nullable: false),
                    FabricanteId = table.Column<int>(type: "integer", nullable: false),
                    VacinaCodigo = table.Column<int>(type: "integer", nullable: false),
                    Lote = table.Column<string>(type: "text", nullable: false),
                    DataAplicacao = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    DescricaoDose = table.Column<string>(type: "text", nullable: false),
                    Nome = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vacinas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Vacinas_Categorias_CategoriaId",
                        column: x => x.CategoriaId,
                        principalTable: "Categorias",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Vacinas_Fabricantes_FabricanteId",
                        column: x => x.FabricanteId,
                        principalTable: "Fabricantes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Vacinas_GruposAtendimento_GrupoAtendimentoId",
                        column: x => x.GrupoAtendimentoId,
                        principalTable: "GruposAtendimento",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Municipios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CodigoIBGE = table.Column<int>(type: "integer", nullable: false),
                    Nome = table.Column<string>(type: "text", nullable: false),
                    UF = table.Column<string>(type: "text", nullable: false),
                    PaisId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Municipios", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Municipios_Paises_PaisId",
                        column: x => x.PaisId,
                        principalTable: "Paises",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Enderecos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    MunicipioId = table.Column<int>(type: "integer", nullable: false),
                    CEP = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Enderecos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Enderecos_Municipios_MunicipioId",
                        column: x => x.MunicipioId,
                        principalTable: "Municipios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Estabelecimentos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Valor = table.Column<int>(type: "integer", nullable: false),
                    RazaoSocial = table.Column<string>(type: "text", nullable: false),
                    NomeFantasia = table.Column<string>(type: "text", nullable: false),
                    MunicipioId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estabelecimentos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Estabelecimentos_Municipios_MunicipioId",
                        column: x => x.MunicipioId,
                        principalTable: "Municipios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Pacientes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Idade = table.Column<int>(type: "integer", nullable: false),
                    DataNascimento = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    SexoBiologicoId = table.Column<int>(type: "integer", nullable: false),
                    RacaId = table.Column<int>(type: "integer", nullable: false),
                    EnderecoId = table.Column<int>(type: "integer", nullable: false),
                    NacionalidadeId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pacientes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Pacientes_Enderecos_EnderecoId",
                        column: x => x.EnderecoId,
                        principalTable: "Enderecos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Pacientes_Nacionalidades_NacionalidadeId",
                        column: x => x.NacionalidadeId,
                        principalTable: "Nacionalidades",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Pacientes_Racas_RacaId",
                        column: x => x.RacaId,
                        principalTable: "Racas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Pacientes_SexoBiologico_SexoBiologicoId",
                        column: x => x.SexoBiologicoId,
                        principalTable: "SexoBiologico",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DocumentosVacinacao",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Guid = table.Column<int>(type: "integer", nullable: false),
                    PacienteId = table.Column<int>(type: "integer", nullable: false),
                    EstabelecimentoId = table.Column<int>(type: "integer", nullable: false),
                    SistemaOrigemId = table.Column<int>(type: "integer", nullable: false),
                    VacinaId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DocumentosVacinacao", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DocumentosVacinacao_Estabelecimentos_EstabelecimentoId",
                        column: x => x.EstabelecimentoId,
                        principalTable: "Estabelecimentos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DocumentosVacinacao_Pacientes_PacienteId",
                        column: x => x.PacienteId,
                        principalTable: "Pacientes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DocumentosVacinacao_Sistemas_SistemaOrigemId",
                        column: x => x.SistemaOrigemId,
                        principalTable: "Sistemas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DocumentosVacinacao_Vacinas_VacinaId",
                        column: x => x.VacinaId,
                        principalTable: "Vacinas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DocumentosVacinacao_EstabelecimentoId",
                table: "DocumentosVacinacao",
                column: "EstabelecimentoId");

            migrationBuilder.CreateIndex(
                name: "IX_DocumentosVacinacao_PacienteId",
                table: "DocumentosVacinacao",
                column: "PacienteId");

            migrationBuilder.CreateIndex(
                name: "IX_DocumentosVacinacao_SistemaOrigemId",
                table: "DocumentosVacinacao",
                column: "SistemaOrigemId");

            migrationBuilder.CreateIndex(
                name: "IX_DocumentosVacinacao_VacinaId",
                table: "DocumentosVacinacao",
                column: "VacinaId");

            migrationBuilder.CreateIndex(
                name: "IX_Enderecos_MunicipioId",
                table: "Enderecos",
                column: "MunicipioId");

            migrationBuilder.CreateIndex(
                name: "IX_Estabelecimentos_MunicipioId",
                table: "Estabelecimentos",
                column: "MunicipioId");

            migrationBuilder.CreateIndex(
                name: "IX_Municipios_PaisId",
                table: "Municipios",
                column: "PaisId");

            migrationBuilder.CreateIndex(
                name: "IX_Pacientes_EnderecoId",
                table: "Pacientes",
                column: "EnderecoId");

            migrationBuilder.CreateIndex(
                name: "IX_Pacientes_NacionalidadeId",
                table: "Pacientes",
                column: "NacionalidadeId");

            migrationBuilder.CreateIndex(
                name: "IX_Pacientes_RacaId",
                table: "Pacientes",
                column: "RacaId");

            migrationBuilder.CreateIndex(
                name: "IX_Pacientes_SexoBiologicoId",
                table: "Pacientes",
                column: "SexoBiologicoId");

            migrationBuilder.CreateIndex(
                name: "IX_Vacinas_CategoriaId",
                table: "Vacinas",
                column: "CategoriaId");

            migrationBuilder.CreateIndex(
                name: "IX_Vacinas_FabricanteId",
                table: "Vacinas",
                column: "FabricanteId");

            migrationBuilder.CreateIndex(
                name: "IX_Vacinas_GrupoAtendimentoId",
                table: "Vacinas",
                column: "GrupoAtendimentoId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DocumentosVacinacao");

            migrationBuilder.DropTable(
                name: "Estabelecimentos");

            migrationBuilder.DropTable(
                name: "Pacientes");

            migrationBuilder.DropTable(
                name: "Sistemas");

            migrationBuilder.DropTable(
                name: "Vacinas");

            migrationBuilder.DropTable(
                name: "Enderecos");

            migrationBuilder.DropTable(
                name: "Nacionalidades");

            migrationBuilder.DropTable(
                name: "Racas");

            migrationBuilder.DropTable(
                name: "SexoBiologico");

            migrationBuilder.DropTable(
                name: "Categorias");

            migrationBuilder.DropTable(
                name: "Fabricantes");

            migrationBuilder.DropTable(
                name: "GruposAtendimento");

            migrationBuilder.DropTable(
                name: "Municipios");

            migrationBuilder.DropTable(
                name: "Paises");
        }
    }
}
