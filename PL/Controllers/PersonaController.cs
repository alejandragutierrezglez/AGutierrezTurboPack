using Microsoft.AspNetCore.Mvc;

namespace PL.Controllers
{
    public class PersonaController : Controller
    {
        [HttpGet]
        public ActionResult GetAll()
        {
            return View();
        }
    }
}
