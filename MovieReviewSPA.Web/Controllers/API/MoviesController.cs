using Microsoft.AspNet.Mvc;
using MovieReviewSPA.Data.Contracts;
using MovieReviewSPA.Model;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MovieReviewSPA.Web.ViewModels.Movie;
using Microsoft.Data.Entity;

namespace MovieReviewSPA.Web.Controllers.API
{
    [Route("api/[controller]")]
    public class MoviesController : Controller
    {
        private IMovieReviewUow UOW;

        public MoviesController(IMovieReviewUow uow)
        {
            UOW = uow;
        }

        //TO DO:- Lazy loading is still not implemented in EF 7
        //Refer here https://github.com/aspnet/EntityFramework/issues/3312
        //Once, same get implemented, Below query will work without any issue
        // GET api/movies
        [HttpGet("")]
        public IQueryable Get()
        {
            /*var model = UOW.Movies.GetAll().OrderByDescending(m => m.Reviews.Count())
               .Select(m => new MovieViewModel
               {
                   Id = m.Id,
                   MovieName = m.MovieName,
                   DirectorName = m.DirectorName,
                   ReleaseYear = m.ReleaseYear,
                   NoOfReviews = m.Reviews.Count()
               });*/

            //This is workaround for lazy loading
            var model = UOW.Movies.GetAll().Include(x => x.Reviews).OrderByDescending(m => m.Reviews.Count)
                .Select(m => new MovieViewModel
                {
                    Id = m.Id,
                    MovieName = m.MovieName,
                    DirectorName = m.DirectorName,
                    ReleaseYear = m.ReleaseYear,
                    NoOfReviews = m.Reviews.Count
                });

            return model;
        }

        // GET api/movies/1
        [HttpGet("{id}")]
        public Movie Get(int id)
        {
            var movie = UOW.Movies.GetById(id);
            if (movie != null) return movie;
            throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.NotFound));
        }

        // Update an existing movie
        // PUT /api/movie/
        [HttpPut("")]
        public HttpResponseMessage Put([FromBody]Movie movie)
        {
            UOW.Movies.Update(movie);
            UOW.Commit();
            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }

        // Create a new movie
        // POST /api/movies
        [HttpPost("")]
        public int Post([FromBody]Movie movie)
        {
            UOW.Movies.Add(movie);
            UOW.Commit();
            return Response.StatusCode = (int)HttpStatusCode.Created;
        }


        // DELETE api/movies/5
        [HttpDelete("{id}")]
        public HttpResponseMessage Delete(int id)
        {
            UOW.Movies.Delete(id);
            UOW.Commit();
            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }

    }
}
