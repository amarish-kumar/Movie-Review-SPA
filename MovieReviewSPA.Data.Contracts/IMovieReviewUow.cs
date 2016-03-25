using MovieReviewSPA.Model;

namespace MovieReviewSPA.Data.Contracts
{
    /// <summary>
    /// Interface for UOW Movie Review
    /// </summary>
    public interface IMovieReviewUow
    {
        void Commit();
        IRepository<Movie> Movies { get; }
        IRepository<MovieReview> MovieReviews { get; }


    }
}
