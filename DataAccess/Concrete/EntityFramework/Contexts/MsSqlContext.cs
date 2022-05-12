using Core.Entities.Concrete;
using Entities.Base;
using Entities.Details;
using Entities.Intermediate;
using Entities.QuestionTypes;
using Entities.ResponseTypes;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Concrete.EntityFramework.Contexts
{
    public class MsSqlContext:DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=ReFormDb;Trusted_Connection=true");
            optionsBuilder.UseSqlServer(
                @"Data Source=tcp:reformdbserver.database.windows.net,1433;Initial Catalog=ReFormDb;User Id=sirrireform@reformdbserver;Password=neD11+AzC63-");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Question>().ToTable("Questions");
            //modelBuilder.Entity<DateQuestion>().ToTable("DateQuestions");

            modelBuilder.Entity<Question>().HasKey(dq => new {dq.Id});
        }

       
        public DbSet<Form> Forms { get; set; }
        public DbSet<OperationClaim> OperationClaims { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserOperationClaim> UserOperationClaims { get; set; }
        public DbSet<UserForm> UserForms { get; set; }
        public DbSet<FormUser> FormUsers { get; set; }
        public DbSet<UserResponse> UserResponses { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<QuestionType> QuestionTypes { get; set; }
        public DbSet<Response> Responses { get; set; }


        /* Question Types */
        public DbSet<DateQuestion> DateQuestions { get; set; }
        public DbSet<EmailQuestion> EmailQuestions { get; set; }
        public DbSet<MultipleChoiceQuestion> MultipleChoiceQuestions { get; set; }
        public DbSet<MultipleChoiceDetail> MultipleChoiceDetails { get; set; }
        public DbSet<NumberQuestion> NumberQuestions { get; set; }
        public DbSet<OpinionScaleQuestion> OpinionScaleQuestions { get; set; }
        public DbSet<PhoneNumberQuestion> PhoneNumberQuestions { get; set; }
        public DbSet<RankingQuestion> RankingQuestions { get; set; }
        public DbSet<RankingDetail> RankingDetails { get; set; }
        public DbSet<RatingQuestion> RatingQuestions { get; set; }
        public DbSet<TextQuestion> TextQuestions { get; set; }
        public DbSet<WebsiteQuestion> WebsiteQuestions { get; set; }
        public DbSet<YesNoQuestion> YesNoQuestions { get; set; }


        /* Response Types */
        public DbSet<DateResponse> DateResponses { get; set; }
        public DbSet<EmailResponse> EmailResponses { get; set; }
        public DbSet<MultipleChoiceResponse> MultipleChoiceResponses { get; set; }
        public DbSet<NumberResponse> NumberResponses { get; set; }
        public DbSet<OpinionScaleResponse> OpinionScaleResponses { get; set; }
        public DbSet<PhoneNumberResponse> PhoneNumberResponses { get; set; }
        public DbSet<RankingResponse> RankingResponses { get; set; }
        public DbSet<RatingResponse> RatingResponses { get; set; }
        public DbSet<TextResponse> TextResponses { get; set; }
        public DbSet<WebsiteResponse> WebsiteResponses { get; set; }
        public DbSet<YesNoResponse> YesNoResponses { get; set; }

    }
}
