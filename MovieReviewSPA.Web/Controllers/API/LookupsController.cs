using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using MovieReviewSPA.Data.Contracts;
using MovieReviewSPA.Model;
using System.Linq;

namespace MovieReviewSPA.Web.Controllers.API
{
    [Route("api/[controller]")]
    public class LookupsController : Controller
    {
        private readonly IMovieReviewUow UOW;

        public LookupsController(IMovieReviewUow uow)
        {
            UOW = uow;
        }

        // GET: api/lookups/movies
        [HttpGet("movies")]
        public IEnumerable<Movie> GetMovies()
        {
            return UOW.Movies.GetAll().OrderBy(m => m.Id);
        }

        // /api/Lookups/getbyreviewerid?id=1
        [HttpGet("getbyreviewerid")]
        public MovieReview GetByReviewerId(int id)
        {
            return UOW.MovieReviews.GetById(id);
        }

        #region OData Future: IQueryable<T>
        //[Queryable]
        // public IQueryable<Movie> Get()        
        // public IQueryable<MovieReview> Get()

        #endregion


    }
}
