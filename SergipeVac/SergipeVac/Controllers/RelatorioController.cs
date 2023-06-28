using Microsoft.AspNetCore.Mvc;
using SergipeVac.Model;
using SergipeVac.Model.Interface;

namespace SergipeVac.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class RelatorioController : Controller
    {
        private readonly IRepositorio<DocumentoImportadoCSV> _repositorio;

        public RelatorioController(IRepositorio<DocumentoImportadoCSV> repositorio)
        {
            _repositorio = repositorio;
        }

        //[HttpGet(Name = "ObterContagemPorEtnia")]
        [HttpGet]
        public async Task<JsonResult> ObterContagemPorEtnia(DateTime? dataMin = null, DateTime? dataMax = null)
        {
            // if (!dataMin.HasValue)
            // {
            //     dataMin = DateTime.MinValue;
            // }
            // if (!dataMax.HasValue)
            // {
            //     dataMax = DateTime.MaxValue;
            // }

            // var dataMinUtc = new DateTimeOffset(dataMin.Value, TimeSpan.Zero);
            // var dataMaxUtc = new DateTimeOffset(dataMax.Value, TimeSpan.Zero);

            // var documentos = _repositorio.Obter(p => p.VacinaDataAplicacao >= dataMinUtc && p.VacinaDataAplicacao <= dataMaxUtc);


            // var vacinasPorEtnia = documentos
            //     .GroupBy(d => d.PacienteRacaCorValor)
            //     .Select(g => new
            //     {
            //         PacienteRacaCorValor = g.Key,
            //         TotalPacientes = g.Select(d => d.PacienteId).Distinct().Count()
            //     })
            //     .ToList();

            // return Json(vacinasPorEtnia);
            
              var data = new[]
            {
            new { pacienteRacaCorValor = "", totalPacientes = 1 },
            new { pacienteRacaCorValor = "AMARELA", totalPacientes = 113604 },
            new { pacienteRacaCorValor = "BRANCA", totalPacientes = 61903 },
            new { pacienteRacaCorValor = "INDIGENA", totalPacientes = 559 },
            new { pacienteRacaCorValor = "PARDA", totalPacientes = 140220 },
            new { pacienteRacaCorValor = "PRETA", totalPacientes = 16505 },
            new { pacienteRacaCorValor = "SEM INFORMACAO", totalPacientes = 339506 }
        };

            return Json(data);
        }
    }
}
