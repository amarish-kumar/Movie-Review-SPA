using System;
using System.Linq;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.ChangeTracking;
using MovieReviewSPA.Data.Contracts;
using MovieReviewSPA.Data.Helpers;
using DbContext = Microsoft.Data.Entity.DbContext;
using EntityState = Microsoft.Data.Entity.EntityState;

namespace MovieReviewSPA.Data
{
    public class EFRepository<T> : IRepository<T> where T : class
    {
        public EFRepository(DbContext dbContext)
        {
            if (dbContext == null)
                throw new ArgumentNullException("dbContext");
            DbContext = dbContext;
            DbSet = DbContext.Set<T>();
        }

        protected DbContext DbContext { get; set; }
        protected DbSet<T> DbSet { get; set; }
        public virtual IQueryable<T> GetAll()
        {
            return DbSet;
        }

        public virtual T GetById(int id)
        {
            //EF Core Will be updated shortly with Find Extension by Default
            //Here, I have written Extension method for the same
            //Source:- http://stackoverflow.com/questions/29030472/dbset-doesnt-have-a-find-method-in-ef7/29082410#29082410
            return DbSet.Find(id);
        }

        public virtual void Add(T entity)
        {
            EntityEntry<T> dbEntityEntry = DbContext.Entry(entity);
            if (dbEntityEntry.State != (EntityState) EntityState.Detached)
            {
                dbEntityEntry.State = EntityState.Added;
            }
            else
            {
                DbSet.Add(entity);
            }
        }

        public virtual void Update(T entity)
        {
            EntityEntry<T> dbEntityEntry = DbContext.Entry(entity);
            if (dbEntityEntry.State != (EntityState) EntityState.Detached)
            {
                DbSet.Attach(entity);
            }
            dbEntityEntry.State = EntityState.Modified;
        }

        public void Delete(T entity)
        {
            EntityEntry<T> dbEntityEntry = DbContext.Entry(entity);
            if (dbEntityEntry.State != (EntityState) EntityState.Deleted)
            {
                dbEntityEntry.State = EntityState.Deleted;
            }
            else
            {
                DbSet.Attach(entity);
                DbSet.Remove(entity);
            }
        }

        public void Delete(int id)
        {
            var entity = GetById(id);
            if (entity == null) return;

            Delete(entity);
        }

      /*  public virtual object Include<TEntity, TProperty>(Func<TEntity, TProperty> p) where TEntity : class
        {
            return DbSet;
        }*/
    }

}
