<h1 align="center">Hi 👋, This is ReForm</h1>
<h3 align="center">Languages and Tools:</h3>
<p align="center"> 
<a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40"/> </a> 
<a href="https://dotnet.microsoft.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet" width="40" height="40"/> </a> 
<a href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer"> <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" width="40" height="40"/> </a> 
<a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> </a> 
<a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> 
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
<a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> 
<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> 
</p>

## Özet
Anahtar kelimeler: Form, Web Uygulaması, Ulaşılabilirlik

Form yapmak isteyen kullanıcıların kolay ve geniş yelpazede soru çeşitliliğine sahip olduğu, ayrıca bu hizmetin ücretsiz sağlandığı bir uygulama amaçlanmaktadır. Piyasadaki birçok form yapma uygulaması ücretli hizmet vermektedir; ücretsiz hizmet veren uygulamaların ise çeşitliliği sınırlıdır. Bu uygulama sayesinde çeşitliliğin artırılıp ücretsiz sunulması sağlanarak orta sınıf hizmet var edilmiştir.

Bu çalışma ile ücretli form uygulamalarındaki soru çeşitliliğinin aslında bir soru çeşidinin türetilmesi ile olası kullanıcıyı yanıltma işlevi gördüğü gösterilmiştir.


## BÖLÜM 1. SORU TİPLERİ

Projede 11 farklı soru tipi bulunmaktadır. Uygulamadaki soru tipleri, ücretli form uygulamalarında farklı soru tipi adı altında gösterilen oysaki tek bir soru tipi olan durumları tek soru tipi altında birleştirilmiş şeklidir. Bu soru tiplerinin detayları aşağıdaki başlıklarda açıklanmaktadır.

### 1.1. Tarih (Date) soru tipi

-	Gerekli olup olmadığını belirtebileceğiniz anahtar (switch) bulunmaktadır.
-	Üç alanlı veri girişi yapılmaktadır: Gün, ay ve yıl.

### 1.2. E-posta (Email) soru tipi

-	Gerekli olup olmadığını belirtebileceğiniz anahtar (switch) bulunmaktadır.
-	E-posta sorgusu yapılmaktadır.

### 1.3. Çoktan Seçmeli (Multiple Choice) soru tipi

-	Gerekli olup olmadığını belirtebileceğiniz anahtar (switch) bulunmaktadır.
-	Çoklu seçimin yapılıp yapılamayacağını belirtebileceğiniz anahtar (switch) bulunmaktadır.
  -	Sınırsız seçim (Unlimited)
  -	Tam sayı (Exact number): Azami seçilebilecek seçenek
  -	Aralık (Range): Asgari ve azami seçilebilecek seçenek
-	Diğer seçeneğini ekleyebileceğiniz anahtar (switch) bulunmaktadır.
-	26 yanıta kadar desteklemektedir.


### 1.4. Sayı (Number) soru tipi

-	Gerekli olup olmadığını belirtebileceğiniz anahtar (switch) bulunmaktadır.
-	Minimum sayının olup olmayacağını belirtebileceğiniz anahtar (switch) ve akabinde sayıyı belirtebileceğiniz alan bulunmaktadır.
-	Maximum sayının olup olmayacağını belirtebileceğiniz anahtar (switch) ve akabinde sayıyı belirtebileceğiniz alan bulunmaktadır.

### 1.5. Görüş Ölçeği (Opinion Scale) soru tipi

-	Gerekli olup olmadığını belirtebileceğiniz anahtar (switch) bulunmaktadır.
-	1’den başlayarak 5’e veya 10’a kadar ölçeğin aralığı belirtilebilir.
-	Aralığın başlangıcının, ortasının ve sonunun ne anlama geldiği belirtilebilir.

### 1.6. Telefon Numarası (Phone Number) soru tipi

-	Gerekli olup olmadığını belirtebileceğiniz anahtar (switch) bulunmaktadır.

### 1.7. Sıralama (Ranking) soru tipi

-	Gerekli olup olmadığını belirtebileceğiniz anahtar (switch) bulunmaktadır.
-	Yanıtlayan kişi cevapların sıralamasını yapabilir.

### 1.8. Değerlendirme (Rating) soru tipi

-	Gerekli olup olmadığını belirtebileceğiniz anahtar (switch) bulunmaktadır.
-	Değerlendirme 1 ila 10 arasında istenildiği maksimum seviyeye kadar ölçeklendirilebilir. 

### 1.9. Web Sitesi (Website) soru tipi

-	Gerekli olup olmadığını belirtebileceğiniz anahtar (switch) bulunmaktadır.

### 1.10. Metin (Text) soru tipi

-	Gerekli olup olmadığını belirtebileceğiniz anahtar (switch) bulunmaktadır.
-	Maximum karakter sayının olup olmayacağını belirtebileceğiniz anahtar (switch) ve akabinde sayıyı belirtebileceğiniz alan bulunmaktadır.

### 1.11. Evet/Hayır (Yes/No) soru tipi

-	Gerekli olup olmadığını belirtebileceğiniz anahtar (switch) bulunmaktadır.

<hr>

## BÖLÜM 2. UYGULAMA

Uygulamanın kullanımı piyasadaki form uygulamalarının karma hâli olarak tasarlanmış olup basitliğe önem verilmiştir. Sayfa sayısı azaltılmış, ortak işlevler tek işlev altında toplanarak sadelik sağlanmıştır.

Uygulamada kolaylık şartına azami ölçüde ehemmiyet gösterilmiştir. Uygulama temel form işlemleri üzerine kurgulanmış olup kullanılabilirlik çerçevesinde form yaratma hıza odaklanılmıştır.

### 2.1.	Çalışma Ortamı

Çalışma ortamında formları görüntüleme ve form yaratma işlemleri yapılır. Her formun soru sayısı ve yanıt sayısı belirtilmiştir.

<img width="100%" alt="Çalışma ortamı" src="https://user-images.githubusercontent.com/109480699/196790707-b2da52a3-76d6-4a0c-b7d5-f679a2e61527.png">

<img width="50%" alt="Yeni form oluşturma butonu" src="https://user-images.githubusercontent.com/109480699/196791066-c1215d7c-7871-4b1b-af73-f2ada65d83af.png">

### 2.2.	Form Oluşturma Ortamı

Form oluşturma ortamı kullanıcı görüşlerine ve mevcut form uygulamalarının harmanı olarak geliştirilmiştir.

<img width="100%" alt="Form oluşturma sayfası" src="https://user-images.githubusercontent.com/109480699/196791328-42036ec3-c7cb-404c-adcf-e8a597dd324e.jpeg">

11 farklı soru tipi eklenebilir. Ayrıca sorular sıralanabilir.

<img width="50%" alt="Soru ekleme" src="https://user-images.githubusercontent.com/109480699/196791606-2ab808db-f049-49d7-b67c-8801fa0a1336.png">

Formu paylaşma aynı sayfa üzerinden kolaylıkla yapılabilir.

<img width="100%" alt="Üst çubuk" src="https://user-images.githubusercontent.com/109480699/196791722-f64dbc2e-672b-4e2c-b872-f0f7f4546024.png">

Soru ayarlarını sağ taraftaki çubuktan kolaylıkla gerçekleştirilebilir.

<img width="50%" alt="Ayarların yapıldığı çubuk" src="https://user-images.githubusercontent.com/109480699/196791807-deb20de5-f911-42ba-aa46-e379032708b3.png">

### 2.3.	Form Doldurma Ortamı

Form bir kez doldurulabilir. Kullanıcı girişi gerektirir.

<img width="100%" alt="Form doldurma sayfası" src="https://user-images.githubusercontent.com/109480699/196791899-c54f2d1d-d699-4183-a80e-712ad1acf405.jpeg">

Sorular arası geçiş için sağ altta bulunan ok tuşları kullanılır.

<img width="50%" alt="Sorular arası geçiş butonu" src="https://user-images.githubusercontent.com/109480699/196792039-5a490d5f-1245-4862-ad28-167fa7b26665.png">

### 2.4.	Sonuçlar Sayfası

<img width="100%" alt="Sonuçlar sayfası" src="https://user-images.githubusercontent.com/109480699/196792165-20526754-9feb-494a-865e-f4d60cd2d633.png">

### 2.5.	Admin Sayfası

Admin sayfasında kullanıcı silip güncelleme işlemleri gerçekleştirilebilir.
<img width="100%" alt="Admin sayfası" src="https://user-images.githubusercontent.com/109480699/196792252-d63d38b8-bdc5-429f-8228-4272755292b4.jpeg">
