using System;

namespace Business.CrossCuttingConcerns
{
    public class FileLogger : ILogger
    {
        public void Log()
        {
            Console.WriteLine("Dosyaya loglandı");
        }
    }

}
