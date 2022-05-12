using System;

namespace Business.CrossCuttingConcerns
{
    public class DatabaseLogger : ILogger
    {
        public void Log()
        {
            Console.WriteLine("Veritabanına loglandı");
        }
    }

}
