﻿using Microsoft.Data.Entity;
using MovieReviewSPA.Model;

namespace MovieReviewSPA.Data
{
    public class MovieReviewDbContext : DbContext
    {
        private object _connectionString;

        public MovieReviewDbContext()
        {
            Database.EnsureCreated();
        }

        public DbSet<Movie> Movies { get; set; }
        public DbSet<MovieReview> MovieReviews { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            if (!optionsBuilder.IsConfigured)
            {
                //While deploying to azure, make sure to change the connection string based on azure settings
                optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=MovieReviewSPA;Trusted_Connection=True;MultipleActiveResultSets=true;");
            }

            base.OnConfiguring(optionsBuilder);
        }

    }
}
