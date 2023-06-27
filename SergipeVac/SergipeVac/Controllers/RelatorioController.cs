using Microsoft.AspNetCore.Mvc;

namespace SergipeVac.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class RelatorioController : Controller
    {
        [HttpGet]
        public async Task<JsonResult> ObterContagemPorEtnia()
        {
            var dados = new
            {
                amarelo = 190,
                pardo = 111,
                preto = 10,
                branco = 1,
            };

            return Json(dados);
            
        }
    }
}
