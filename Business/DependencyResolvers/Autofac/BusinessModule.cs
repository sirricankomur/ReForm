using Autofac;
using Autofac.Extras.DynamicProxy;
using Business.Abstract;
using Business.Concrete;
using Castle.DynamicProxy;
using Core.Utilities.Interceptors;
using Core.Utilities.Security.JWT;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using Business.Abstract.Auth;
using Business.Abstract.Base;
using Business.Abstract.Details;
using Business.Abstract.Intermediate;
using Business.Abstract.QuestionTypes;
using Business.Abstract.ResponseTypes;
using Business.Concrete.Auth;
using Business.Concrete.Base;
using Business.Concrete.Details;
using Business.Concrete.Intermediate;
using Business.Concrete.QuestionTypes;
using Business.Concrete.ResponseTypes;
using DataAccess.Abstract.Base;
using DataAccess.Abstract.Details;
using DataAccess.Abstract.Intermediate;
using DataAccess.Abstract.QuestionTypes;
using DataAccess.Abstract.ResponseTypes;
using DataAccess.Concrete.EntityFramework.Base;
using DataAccess.Concrete.EntityFramework.Details;
using DataAccess.Concrete.EntityFramework.Intermediate;
using DataAccess.Concrete.EntityFramework.QuestionTypes;
using DataAccess.Concrete.EntityFramework.ResponseTypes;

namespace Business.DependencyResolvers.Autofac
{
    public class BusinessModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<UserManager>().As<IUserService>();
            builder.RegisterType<UserDal>().As<IUserDal>();

            builder.RegisterType<FormManager>().As<IFormService>();
            builder.RegisterType<FormDal>().As<IFormDal>();

            builder.RegisterType<UserFormManager>().As<IUserFormService>();
            builder.RegisterType<UserFormDal>().As<IUserFormDal>();

            builder.RegisterType<FormUserManager>().As<IFormUserService>();
            builder.RegisterType<FormUserDal>().As<IFormUserDal>();

            builder.RegisterType<UserResponseManager>().As<IUserResponseService>();
            builder.RegisterType<UserResponseDal>().As<IUserResponseDal>();

            builder.RegisterType<AuthManager>().As<IAuthService>();
            builder.RegisterType<JwtHelper>().As<ITokenHelper>();

            builder.RegisterType<QuestionManager>().As<IQuestionService>();
            builder.RegisterType<QuestionDal>().As<IQuestionDal>();

            builder.RegisterType<ResponseManager>().As<IResponseService>();
            builder.RegisterType<ResponseDal>().As<IResponseDal>();

            builder.RegisterType<QuestionTypeManager>().As<IQuestionTypeService>();
            builder.RegisterType<QuestionTypeDal>().As<IQuestionTypeDal>();

            

            /* Question Types */
            builder.RegisterType<DateQuestionManager>().As<IDateQuestionService>();
            builder.RegisterType<DateQuestionDal>().As<IDateQuestionDal>();

            builder.RegisterType<EmailQuestionManager>().As<IEmailQuestionService>();
            builder.RegisterType<EmailQuestionDal>().As<IEmailQuestionDal>();

            builder.RegisterType<MultipleChoiceQuestionManager>().As<IMultipleChoiceQuestionService>();
            builder.RegisterType<MultipleChoiceQuestionDal>().As<IMultipleChoiceQuestionDal>();

            builder.RegisterType<MultipleChoiceDetailManager>().As<IMultipleChoiceDetailService>();
            builder.RegisterType<MultipleChoiceDetailDal>().As<IMultipleChoiceDetailDal>();

            builder.RegisterType<NumberQuestionManager>().As<INumberQuestionService>();
            builder.RegisterType<NumberQuestionDal>().As<INumberQuestionDal>();

            builder.RegisterType<OpinionScaleQuestionManager>().As<IOpinionScaleQuestionService>();
            builder.RegisterType<OpinionScaleQuestionDal>().As<IOpinionScaleQuestionDal>();

            builder.RegisterType<PhoneNumberQuestionManager>().As<IPhoneNumberQuestionService>();
            builder.RegisterType<PhoneNumberQuestionDal>().As<IPhoneNumberQuestionDal>();

            builder.RegisterType<RankingQuestionManager>().As<IRankingQuestionService>();
            builder.RegisterType<RankingQuestionDal>().As<IRankingQuestionDal>();

            builder.RegisterType<RankingDetailManager>().As<IRankingDetailService>();
            builder.RegisterType<RankingDetailDal>().As<IRankingDetailDal>();

            builder.RegisterType<RatingQuestionManager>().As<IRatingQuestionService>();
            builder.RegisterType<RatingQuestionDal>().As<IRatingQuestionDal>();

            builder.RegisterType<TextQuestionManager>().As<ITextQuestionService>();
            builder.RegisterType<TextQuestionDal>().As<ITextQuestionDal>();

            builder.RegisterType<WebsiteQuestionManager>().As<IWebsiteQuestionService>();
            builder.RegisterType<WebsiteQuestionDal>().As<IWebsiteQuestionDal>();

            builder.RegisterType<YesNoQuestionManager>().As<IYesNoQuestionService>();
            builder.RegisterType<YesNoQuestionDal>().As<IYesNoQuestionDal>();


            /* Response Types */
            builder.RegisterType<DateResponseManager>().As<IDateResponseService>();
            builder.RegisterType<DateResponseDal>().As<IDateResponseDal>();

            builder.RegisterType<EmailResponseManager>().As<IEmailResponseService>();
            builder.RegisterType<EmailResponseDal>().As<IEmailResponseDal>();

            builder.RegisterType<MultipleChoiceResponseManager>().As<IMultipleChoiceResponseService>();
            builder.RegisterType<MultipleChoiceResponseDal>().As<IMultipleChoiceResponseDal>();

            builder.RegisterType<NumberResponseManager>().As<INumberResponseService>();
            builder.RegisterType<NumberResponseDal>().As<INumberResponseDal>();

            builder.RegisterType<OpinionScaleResponseManager>().As<IOpinionScaleResponseService>();
            builder.RegisterType<OpinionScaleResponseDal>().As<IOpinionScaleResponseDal>();

            builder.RegisterType<PhoneNumberResponseManager>().As<IPhoneNumberResponseService>();
            builder.RegisterType<PhoneNumberResponseDal>().As<IPhoneNumberResponseDal>();

            builder.RegisterType<RankingResponseManager>().As<IRankingResponseService>();
            builder.RegisterType<RankingResponseDal>().As<IRankingResponseDal>();

            builder.RegisterType<RatingResponseManager>().As<IRatingResponseService>();
            builder.RegisterType<RatingResponseDal>().As<IRatingResponseDal>();

            builder.RegisterType<TextResponseManager>().As<ITextResponseService>();
            builder.RegisterType<TextResponseDal>().As<ITextResponseDal>();

            builder.RegisterType<WebsiteResponseManager>().As<IWebsiteResponseService>();
            builder.RegisterType<WebsiteResponseDal>().As<IWebsiteResponseDal>();

            builder.RegisterType<YesNoResponseManager>().As<IYesNoResponseService>();
            builder.RegisterType<YesNoResponseDal>().As<IYesNoResponseDal>();



            var assembly = System.Reflection.Assembly.GetExecutingAssembly();

            builder.RegisterAssemblyTypes(assembly).AsImplementedInterfaces()
                .EnableInterfaceInterceptors(new ProxyGenerationOptions()
                {
                    Selector = new AspectInterceptorSelector()
                }).SingleInstance();


        }
    }
}
