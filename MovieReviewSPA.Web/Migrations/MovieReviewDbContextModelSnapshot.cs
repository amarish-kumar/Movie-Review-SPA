using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using MovieReviewSPA.Data;

namespace MovieReviewSPA.Web.Migrations
{
    [DbContext(typeof(MovieReviewDbContext))]
    partial class MovieReviewDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0-rc1-16348")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MovieReviewSPA.Model.Movie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("DirectorName");

                    b.Property<string>("MovieName");

                    b.Property<string>("ReleaseYear");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("MovieReviewSPA.Model.MovieReview", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("MovieId");

                    b.Property<string>("ReviewerComments");

                    b.Property<string>("ReviewerName");

                    b.Property<int>("ReviewerRating");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("MovieReviewSPA.Model.MovieReview", b =>
                {
                    b.HasOne("MovieReviewSPA.Model.Movie")
                        .WithMany()
                        .HasForeignKey("MovieId");
                });
        }
    }
}
