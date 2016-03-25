using Microsoft.Data.Entity;
using MovieReviewSPA.Model;

namespace MovieReviewSPA.Data
{
    public class MovieReviewDbContext : DbContext
    {
        public MovieReviewDbContext()
        {
            Database.EnsureCreated();
        }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<MovieReview> MovieReviews { get; set; }

       
    }
}
