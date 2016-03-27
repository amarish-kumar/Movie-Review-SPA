using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieReviewSPA.Web.ViewModels.Movie
{
    public class MovieViewModel
    {
        public int Id { get; set; }
        public string MovieName { get; set; }
        public string DirectorName { get; set; }
        public string ReleaseYear { get; set; }
        public int NoOfReviews { get; set; }
    }
}
