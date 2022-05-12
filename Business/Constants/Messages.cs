using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;
using Core.Entities.Concrete;

namespace Business.Constants
{
    public static class Messages
    {
        public static string ProductNameInvalid = "Ürün ismi geçersiz";
        public static string MaintenanceTime = "Sistem bakımda";
        public static string ProductsListed = "Ürünler listelendi";
        public static string ProductCountOfCategoryError = "Bir kategoride en fazla 10 ürün olabilir";
        public static string ProductNameAlreadyExists = "Bu isimde zaten başka bir ürün var";
        public static string CategoryLimitExceded = "Kategori limiti aşıldığı için yeni ürün eklenemiyor";
        public static string AuthorizationDenied = "Yetkiniz yok.";


        public static string FormsListed = "The forms are listed.";
        public static string NotFoundUser = "Not found user!";
        public static string UserExists = "User exists!";
        public static string RegistrationSuccessful = "Registration successful.";
        public static string UserNotFound = "User not found!";
        public static string PasswordIsIncorrect = "Password is incorrect!";
        public static string LoginSuccessful = "Login successful.";
        public static string TokenCreated = "Token created.";


        /* Added */
        public static string ProductAdded = "Product added.";
        public static string AddedQuestion = "Added 'Question'.";

        /* QuestionTypes */
        public static string AddedDateQuestion = "Added 'Date' question.";
        public static string AddedEmailQuestion = "Added 'Email' question.";
        public static string AddedMultipleChoiceQuestion = "Added 'Multiple Choice' question.";
        public static string AddedNumberQuestion = "Added 'Number' question.";
        public static string AddedOpinionScaleQuestion = "Added 'Opinion Scale' question.";
        public static string AddedPhoneNumberQuestion = "Added 'Phone Number' question.";
        public static string AddedRankingQuestion = "Added 'Ranking' question.";
        public static string AddedRatingQuestion = "Added 'Rating' question.";
        public static string AddedTextQuestion = "Added 'Text' question.";
        public static string AddedWebsiteQuestion = "Added 'Website' question.";
        public static string AddedYesNoQuestion = "Added 'Yes/No' question.";


        public static string AddedMultipleChoiceDetail = "Added 'Multiple Choice Detail' question.";
        public static string AddedRankingDetail = "Added 'Ranking Detail' question.";



        /* Deleted */
        public static string DeletedForm = "Deleted the form!";
        public static string DeletedQuestion = "Deleted the question!";

        public static string DeletedMultipleChoiceDetail = "Deleted 'Multiple Choice Detail' question.";
        public static string DeletedRankingDetail = "Deleted 'Ranking Detail' question.";


        /* QuestionTypes */
        public static string DeletedDateQuestion = "Deleted 'Date' question.";
        public static string DeletedEmailQuestion = "Deleted 'Email' question.";
        public static string DeletedMultipleChoiceQuestion = "Deleted 'Multiple Choice' question.";
        public static string DeletedNumberQuestion = "Deleted 'Number' question.";
        public static string DeletedOpinionScaleQuestion = "Deleted 'Opinion Scale' question.";
        public static string DeletedPhoneNumberQuestion = "Deleted 'Phone Number' question.";
        public static string DeletedRankingQuestion = "Deleted 'Ranking' question.";
        public static string DeletedRatingQuestion = "Deleted 'Rating' question.";
        public static string DeletedTextQuestion = "Deleted 'Text' question.";
        public static string DeletedWebsiteQuestion = "Deleted 'Website' question.";
        public static string DeletedYesNoQuestion = "Deleted 'Yes/No' question.";

        /* Updated */
        public static string UpdatedForm = "Updated the form.";
        public static string UpdatedQuestion = "Updated the question.";
        public static string UpdatedDateQuestion = "Updated the 'Date' question.";
        public static string UpdatedEmailQuestion = "Updated the 'Email' question.";
        public static string UpdatedMultipleChoiceQuestion = "Updated the 'Multiple Choice' question.";
        public static string UpdatedNumberQuestion = "Updated the 'Number' question.";
        public static string UpdatedOpinionScaleQuestion = "Updated the 'Opinion Scale' question.";
        public static string UpdatedPhoneNumberQuestion = "Updated the 'Phone Number' question.";
        public static string UpdatedRankingQuestion = "Updated the 'Ranking' question.";
        public static string UpdatedRatingQuestion = "Updated the 'Rating' question.";
        public static string UpdatedTextQuestion = "Updated the 'Text' question.";
        public static string UpdatedWebsiteQuestion = "Updated the 'Website' question.";
        public static string UpdatedYesNoQuestion = "Updated the 'Yes/No' question.";


        public static string UpdatedMultipleChoiceDetail = "Updated 'Multiple Choice Detail' question.";
        public static string UpdatedRankingDetail = "Updated 'Ranking Detail' question.";



        /* Get */
        public static string QuestionTypesListed = "Question types listed.";

        public static string QuestionsListed = "Question listed.";
    }
}
