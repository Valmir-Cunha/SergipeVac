namespace SergipeVac.Model
{
    public class Vacina
    {
        public int Id { get; set; }
        public int GrupoAtendimentoId { get; set; }
        public int CategoriaId { get; set; }
        public int FabricanteId { get; set; }
        public int VacinaCodigo { get; set; }
        public string Lote { get; set; }
        public DateTime DataAplicacao { get; set; }
        public string DescricaoDose { get; set; }
        public string Nome { get; set; }

        public GrupoAtendimento GrupoAtendimento { get; set; }
        public Categoria Categoria { get; set; }
        public Fabricante Fabricante { get; set; }
    }
}
