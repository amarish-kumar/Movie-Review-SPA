using System.Linq;
using Microsoft.AspNet.Mvc;
using MovieReviewSPA.Data;

namespace MovieReviewSPA.Web.Controllers
{
    public class HomeController : Controller
    {
        private MovieReviewDbContext _dbContext;

        public HomeController(MovieReviewDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public IActionResult Index()
        {
            var movies = _dbContext.Movies.ToList();
            return View(movies);
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
