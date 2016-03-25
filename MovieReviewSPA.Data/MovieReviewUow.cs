using System;
using MovieReviewSPA.Data.Contracts;
using MovieReviewSPA.Data.Helpers;
using MovieReviewSPA.Model;

namespace MovieReviewSPA.Data
{
    /// <summary>
    /// The Movie review "Unit of Work"
    ///     1) decouples the repos from the controllers
    ///     2) decouples the DbContext and EF from the controllers
    ///     3) manages the UoW
    /// </summary>
    /// <remarks>
    /// This class implements the "Unit of Work" pattern in which
    /// the "UoW" serves as a facade for querying and saving to the database.
    /// Querying is delegated to "repositories".
    /// Each repository serves as a container dedicated to a particular
    /// root entity type such as a 
    /// A repository typically exposes "Get" methods for querying and
    /// will offer add, update, and delete methods if those features are supported.
    /// The repositories rely on their parent UoW to provide the interface to the
    /// data layer (which is the EF DbContext in Movie Review).
    /// </remarks>
    /// 
    public class MovieReviewUow : IMovieReviewUow, IDisposable
    {
        public MovieReviewUow(IRepositoryProvider repositoryProvider)
        {
            CreateDbContext();
            repositoryProvider.DbContext = DbContext;
            RepositoryProvider = repositoryProvider;
        }

        public IRepository<Movie> Movies { get { return GetStandardRepo<Movie>(); } }
        public IRepository<MovieReview> MovieReviews { get { return GetStandardRepo<MovieReview>(); } }


        public void Commit()
        {
            DbContext.SaveChanges();
        }
        protected void CreateDbContext()
        {
            DbContext = new MovieReviewDbContext();
        }


        protected IRepositoryProvider RepositoryProvider { get; set; }


        private IRepository<T> GetStandardRepo<T>() where T : class
        {
            return RepositoryProvider.GetRepositoryForEntityType<T>();
        }

        private T GetRepo<T>() where T : class
        {
            return RepositoryProvider.GetRepository<T>();
        }
        private MovieReviewDbContext DbContext { get; set; }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (DbContext != null)
                {
                    DbContext.Dispose();
                }
            }
        }
    }
}
