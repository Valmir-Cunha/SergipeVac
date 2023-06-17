namespace SergipeVac.Model
{
    public class DocumentoVacinacao
    {
        public int Id{ get; set; }
        public int Guid{ get; set; }
        public int PacienteId { get; set; }
        public int EstabelecimentoId { get; set; }
        public int SistemaOrigemId { get; set; }
        public int VacinaId { get; set; }

        public Paciente Paciente { get; set; }
        public Estabelecimento Estabelecimento { get; set; }
        public Sistema SistemaOrigem { get; set; }
        public Vacina Vacina { get; set;}

    }
}
