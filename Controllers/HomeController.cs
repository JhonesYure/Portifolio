using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PortifolioPro.Models;

namespace PortifolioPro.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Contato (Contato contato)
        {
            try
            {
                DatabaseService dbs = new DatabaseService();
                dbs.CadastroContato(contato);

                return Json(new { status="ok", mensagem="Dados enviado!" });
            }
            catch (Exception e)
            {
                _logger.LogError("Erro ao gravar no banco de dados"+ e.Message);
                //ViewData["mensagem"] = "Erro! Tente novamente mais tarde";

                 return Json(new {status="ERRO", mensagem="falha no envio"});
            }
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
